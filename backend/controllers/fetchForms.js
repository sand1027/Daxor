import BusinessForm from "../models/businessFormModel.js";
import ApplicantForm from "../models/applicantFormModel.js";
import User from "../models/userModel.js";

const getFormsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Fetch user based on userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch BusinessForms for the user
    const businessForms = await BusinessForm.find({ user: userId }).populate(
      "user"
    );

    // Fetch ApplicantForms for the user
    const applicantForms = await ApplicantForm.find({ user: userId }).populate(
      "user"
    );

    res.json({ applicantForms, businessForms });
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ error: "Error fetching forms" });
  }
};

export { getFormsByUserId };
