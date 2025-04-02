export async function GET(request, { params }) {
  return Response.json({ message: "GET /api/vehicle/\ - Fetch vehicle" });
}

export async function PUT(request, { params }) {
  return Response.json({ message: "PUT /api/vehicle/\ - Update vehicle" });
}

export async function DELETE(request, { params }) {
  return Response.json({ message: "DELETE /api/vehicle/\ - Delete vehicle" });
}
