import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json()
  const maleDowry = res.maleDowry;
  const femaleDowry = res.femaleDowry;
  const dowry1 = (Number(maleDowry) + Number(femaleDowry)) * (5);
  const dowry2 = (Number(maleDowry) + Number(femaleDowry)) * (10);

  return NextResponse.json({ "dowry1": dowry1, "dowry2": dowry2 });
}