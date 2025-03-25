import ApplicantForm from "../models/applicantFormModel.js";
import BusinessForm from "../models/businessFormModel.js";

export const updateProgress = async (req, res) => {
  try {
    const { formId } = req.params;
    const { progress } = req.body;
    console.log("Form ID:", formId);
    console.log("Request Body:", req.body);

    let updatedForm;
    if (req.body.type === "applicant") {
      updatedForm = await ApplicantForm.findByIdAndUpdate(
        formId,
        { progress },
        { new: true }
      );
    } else if (req.body.type === "business") {
      updatedForm = await BusinessForm.findByIdAndUpdate(
        formId,
        { progress },
        { new: true }
      );
    }

    if (!updatedForm) {
      return res
        .status(404)
        .json({ success: false, message: "Form not found" });
    }

    res.json({ success: true, form: updatedForm });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating progress", error });
  }
};
