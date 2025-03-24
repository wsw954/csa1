//models/vehicle.js
import mongoose from "mongoose";

import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., "exteriorColor", "powertrain"
  displayName: { type: String, required: true },
  id: { type: String, required: true }, // Unique identifier for the selected option
  name: { type: String, required: true }, // Name of the selected option
  price: { type: Number, required: true, default: 0 }, // Price of the option
});

// Define the Vehicle Schema
const vehicleSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    msrp: {
      type: Number,
      required: true,
    },
    trim: {
      type: String,
      required: true,
    },
    optionsSelected: [optionSchema],
    user: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      role: { type: String, enum: ["buyer", "dealer"], required: true },
    },
  },
  { timestamps: true }
);

const Vehicle =
  mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
