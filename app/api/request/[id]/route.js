//app/api/request/[id]/route.js
import { requireAuth } from "@/lib/auth/api-protect";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { status, session, body } = await requireAuth(req);
  if (status !== 200) return NextResponse.json(body, { status });

  return NextResponse.json({ message: "GET /api/request/[id]" });
}

export async function PUT(req) {
  const { status, session, body } = await requireAuth(req);
  if (status !== 200) return NextResponse.json(body, { status });

  return NextResponse.json({ message: "PUT /api/request/[id]" });
}

export async function DELETE(req) {
  const { status, session, body } = await requireAuth(req);
  if (status !== 200) return NextResponse.json(body, { status });

  return NextResponse.json({ message: "DELETE /api/request/[id]" });
}
