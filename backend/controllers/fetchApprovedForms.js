// controllers/formsController.js

import ApplicantForm from "../models/applicantFormModel.js";

const fetchApprovedForms = async (req, res) => {
  try {
    const approvedForms = await ApplicantForm.find({ progress: "Approved" });
    res.status(200).json({ success: true, forms: approvedForms });
  } catch (error) {
    console.error("Error fetching approved forms:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

export { fetchApprovedForms };
