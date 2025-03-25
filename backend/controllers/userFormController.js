import ApplicantForm from "../models/applicantFormModel.js";
import BusinessForm from "../models/businessFormModel.js";
import User from "../models/userModel.js"; // Assuming this model exists for user authentication

// Controller function to save applicant form data
const saveApplicantData = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User information is missing",
      });
    }

    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      country,
      category,
      highestQualification,
      workExperience,
    } = req.body;

    const resume = req.files.resume[0].path;

    const adhaar = req.files.adhaar[0].path;
    const userId = req.user._id;

    const newApplicantForm = new ApplicantForm({
      fullName,
      dateOfBirth,
      gender,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      country,
      category,
      highestQualification,
      workExperience,
      resume,
      adhaar,
      user: userId,
    });

    await newApplicantForm.save();

    res
      .status(201)
      .json({ success: true, message: "Applicant form saved successfully" });
  } catch (error) {
    console.error("Save Applicant Data Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Controller function to save business form data
const saveBusinessData = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User information is missing",
      });
    }

    const {
      companyName,
      businessType,
      contactPerson,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      country,
      website,
      aboutCompany,
    } = req.body;

    const userId = req.user._id;

    const newBusinessForm = new BusinessForm({
      companyName,
      businessType,
      contactPerson,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      country,
      website,
      aboutCompany,

      user: userId,
    });

    await newBusinessForm.save();

    res
      .status(201)
      .json({ success: true, message: "Business form saved successfully" });
  } catch (error) {
    console.error("Save Business Data Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Controller function to fetch all applicant forms
const getApplicantForms = async (req, res) => {
  try {
    const forms = await ApplicantForm.find().populate("user", "name email"); // Populate user details if needed
    res.json({ success: true, forms });
  } catch (error) {
    console.error("Fetch Applicant Forms Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Controller function to fetch all business forms
const getBusinessForms = async (req, res) => {
  try {
    const forms = await BusinessForm.find().populate("user", "name email"); // Populate user details if needed
    res.json({ success: true, forms });
  } catch (error) {
    console.error("Fetch Business Forms Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export {
  saveApplicantData,
  saveBusinessData,
  getBusinessForms,
  getApplicantForms,
};
