//config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  console.log("[DB] Running connectDB()...");
  console.log(
    "[DB] Attempting to connect with MONGO_URI:",
    process.env.MONGO_URI
  );

  if (!process.env.MONGO_URI) {
    console.error("[DB] MONGO_URI is missing!");
    process.exit(1);
  }

  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("[DB] MongoDB already connected.");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log(`[DB] MongoDB Connected to: ${mongoose.connection.name}`);
  } catch (error) {
    console.error(`[DB] MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
