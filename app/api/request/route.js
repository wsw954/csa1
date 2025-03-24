export async function GET(request) {
  return Response.json({ message: 'GET app/api/request/route.js' });
}

export async function POST(request) {
  return Response.json({ message: 'POST app/api/request/route.js' });
}

export async function PUT(request) {
  return Response.json({ message: 'PUT app/api/request/route.js' });
}

export async function DELETE(request) {
  return Response.json({ message: 'DELETE app/api/request/route.js' });
}
