import path from "path";
import fs from "fs";
import archiver from "archiver";
import { fileURLToPath } from "url"; // To convert import.meta.url to file path
import { dirname } from "path"; // To extract directory name

import ApplicantForm from "../models/applicantFormModel.js"; // Adjust import path as per your project

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Controller function to handle file download for an applicant form
export const downloadFiles = async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await ApplicantForm.findById(formId);

    if (!form) {
      return res
        .status(404)
        .json({ success: false, message: "Form not found" });
    }

    if (!form.resume || !form.adhaar) {
      console.error("Missing resume or adhaar file in form data:", form);
      return res.status(404).json({
        success: false,
        message: "Resume or Adhaar file not found in form data",
      });
    }

    // Construct paths to files
    const resumePath = path.join(__dirname, "..", form.resume);
    const adhaarPath = path.join(__dirname, "..", form.adhaar);

    console.log("Resume Path:", resumePath);
    console.log("Adhaar Path:", adhaarPath);

    // Check if files exist
    if (!fs.existsSync(resumePath) || !fs.existsSync(adhaarPath)) {
      console.error("One or both files not found on server:", form);
      return res
        .status(404)
        .json({ success: false, message: "File not found" });
    }

    // Prepare files to be zipped
    const files = [
      { path: resumePath, name: "resume.docx" },
      { path: adhaarPath, name: "adhaar.jpg" },
    ];

    // Create a zip archive
    const zipFileName = `applicant_files_${Date.now()}.zip`;
    const zipFilePath = path.join(__dirname, "..", "uploads", zipFileName);
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      console.log(
        "Zip archive created successfully:",
        archive.pointer() + " total bytes"
      );
      res.download(zipFilePath);
    });

    archive.on("error", (err) => {
      console.error("Archiver Error:", err);
      res
        .status(500)
        .json({ success: false, message: "Error creating zip archive" });
    });

    archive.pipe(output);

    files.forEach((file) => {
      archive.file(file.path, { name: file.name });
    });

    archive.finalize();
  } catch (error) {
    console.error("Download Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
