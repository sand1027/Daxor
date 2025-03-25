import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Daxor:Daxor2024@daxorcluster.ozzp5ll.mongodb.net/daxor"
    )
    .then(() => console.log("DB Connected"));
};
