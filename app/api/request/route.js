//api/request/route.js
import { requireAuth } from "@/lib/auth/api-protect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { status, session, body } = await requireAuth(req);
  if (status !== 200) return NextResponse.json(body, { status });

  return NextResponse.json({ message: "Request created successfully!" });
}
