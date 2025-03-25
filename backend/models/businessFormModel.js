import mongoose from "mongoose";

const { Schema } = mongoose;

const businessFormSchema = new Schema(
  {
    companyName: { type: String, required: true },
    businessType: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    country: { type: String, required: true },
    website: { type: String },
    aboutCompany: { type: String, required: true },

    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const BusinessForm = mongoose.model("BusinessForm", businessFormSchema);

export default BusinessForm;
