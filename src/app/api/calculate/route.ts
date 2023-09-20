import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json()
  const maleDowry = res.maleDowry;
  const femaleDowry = res.femaleDowry;
  const dowry1 = (parseInt(maleDowry) + parseInt(femaleDowry)) * (5);
  const dowry2 = (parseInt(maleDowry) + parseInt(femaleDowry)) * (10);

  return NextResponse.json({ "dowry1": dowry1, "dowry2": dowry2 });
}