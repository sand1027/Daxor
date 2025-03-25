import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Adjust the path where files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Use unique filenames to avoid conflicts
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

export const uploadApplicant = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "adhaar", maxCount: 1 },
]);

export const uploadBusiness = upload.single("logo");
