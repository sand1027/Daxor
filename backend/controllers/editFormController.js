// controllers/formController.js
import ApplicantForm from "../models/applicantFormModel.js";
import BusinessForm from "../models/businessFormModel.js";

// Update a form by ID
export const updateForm = async (req, res) => {
  const { formId } = req.params;
  const updatedForm = req.body;

  try {
    // Check if the updated form includes files (handled by multer)
    const files = {};
    for (const key in req.files) {
      files[key] = req.files[key][0].path;
    }
    // Create updated form object with files if they exist
    const formToUpdate = { ...updatedForm, ...files };

    let form = await ApplicantForm.findByIdAndUpdate(formId, formToUpdate, {
      new: true,
      runValidators: true, // Ensure Mongoose runs validators on update
    });

    if (!form) {
      form = await BusinessForm.findByIdAndUpdate(formId, formToUpdate, {
        new: true,
        runValidators: true,
      });
      if (!form) {
        return res
          .status(404)
          .json({ success: false, message: "Form not found" });
      }
    }

    res.json({ success: true, form });
  } catch (error) {
    console.error("Update Form Error:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the form",
    });
  }
};
