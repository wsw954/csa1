//models/request.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ["cash", "finance", "lease"],
    required: true,
  },
  downPayment: {
    type: Number,
    required: function () {
      return this.method === "finance" || this.method === "lease";
    }, // Only required for finance or lease
    default: null,
  },
  leaseTerm: {
    type: Number,
    required: function () {
      return this.method === "lease";
    }, // Only required for lease
    default: null,
  },
  mileage: {
    type: Number,
    required: function () {
      return this.method === "lease";
    }, // Only required for lease
    default: null,
  },
});

// Define the Request Schema
const requestSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    paymentDetails: paymentSchema, // Embedded payment details schema
    status: {
      type: String,
      enum: ["open", "matched", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

const Request =
  mongoose.models.Request || mongoose.model("Request", requestSchema);

export default Request;
