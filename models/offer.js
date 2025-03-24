//models/offer.js
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

// Define the Offer Schema
const offerSchema = new mongoose.Schema(
  {
    dealer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
      required: true,
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    paymentDetails: paymentSchema, // Payment details for the offer
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema);

export default Offer;
