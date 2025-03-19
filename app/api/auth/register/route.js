//app/api/auth/register/route.js
import { hash } from "bcryptjs";
import connectDB from "@/config/db";
import { User, Buyer, Dealer } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password, role, ...otherData } = await req.json();

    if (!["buyer", "dealer"].includes(role)) {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    let newUser;
    if (role === "buyer") {
      newUser = new Buyer({
        email,
        password: hashedPassword,
        role,
        ...otherData,
      });
    } else {
      newUser = new Dealer({
        email,
        password: hashedPassword,
        role,
        ...otherData,
      });
    }

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
