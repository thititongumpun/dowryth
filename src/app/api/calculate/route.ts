import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const dowry = (45000 + 50000) * (5);
  const dowry2 = (45000 + 50000) * (10);

  return NextResponse.json({ "dowry1": dowry, "dowry2": dowry2 });
}