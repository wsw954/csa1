//models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["buyer", "dealer", "admin"], // Allowed roles
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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, discriminatorKey: "role" }
);

// Base User Model
const User = mongoose.models.User || mongoose.model("User", userSchema);

// Buyer Schema (inherits from User)
const buyerSchema = new mongoose.Schema({
  address: { type: String, required: true },
  creditScore: { type: Number, min: 300, max: 850 }, // Optional for future use
});

// Dealer Schema (inherits from User)
const dealerSchema = new mongoose.Schema({
  dealershipAddress: { type: String, required: true },
  brands: [{ type: String, required: true }], // List of franchised brands
});

// Create Models for Buyers and Dealers
const Buyer = mongoose.models.buyer || User.discriminator("buyer", buyerSchema);

const Dealer =
  mongoose.models.dealer || User.discriminator("dealer", dealerSchema);
export { User, Buyer, Dealer };
