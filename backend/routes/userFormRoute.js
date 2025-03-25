import express from "express";
import {
  uploadApplicant,
  uploadBusiness,
} from "../middleware/uploadMiddleware.js";
import {
  saveApplicantData,
  saveBusinessData,
} from "../controllers/userFormController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getFormsByUserId } from "../controllers/fetchForms.js";
import { updateForm } from "../controllers/editFormController.js";
import { downloadFiles } from "../controllers/formDownloadController.js";
import { updateProgress } from "../controllers/progressController.js";

import {
  getApplicantForms,
  getBusinessForms,
} from "../controllers/userFormController.js";

const router = express.Router();

// Route to save applicant form data with file upload (requires authentication and file upload)
router.post(
  "/save-applicant-form",
  authMiddleware,
  uploadApplicant,
  saveApplicantData
);
router.post(
  "/save-business-form",
  authMiddleware,
  uploadBusiness,
  saveBusinessData
);
router.get("/:userId", getFormsByUserId);
router.put("/update/:formId", updateForm);
router.get("/forms/applicants", getApplicantForms);
router.get("/forms/businesses", getBusinessForms);
router.get("/forms/download/:formId", downloadFiles);
router.put("/update-progress/:formId", updateProgress);

export default router;
