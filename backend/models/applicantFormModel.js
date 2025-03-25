import mongoose from "mongoose";

const { Schema } = mongoose;

const applicantFormSchema = new Schema(
  {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    country: { type: String, required: true },
    category: { type: String, required: true },
    highestQualification: { type: String, required: true },
    workExperience: { type: String, required: true },
    resume: { type: String, required: true },
    adhaar: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    progress: { type: String, default: "In Progress" },
  },
  { timestamps: true }
);

const ApplicantForm = mongoose.model("ApplicantForm", applicantFormSchema);

export default ApplicantForm;
