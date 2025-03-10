//models/user.js
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["buyer", "dealer", "admin"], // Only allow these values
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      name: String,
      contact: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
