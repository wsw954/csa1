//api/auth/register/route.js
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/models/user";

console.log("DB Line 6");

export async function POST(req) {
  await connectDB();

  try {
    const { email, password, role } = await req.json();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await User.create({ email, password, role });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
