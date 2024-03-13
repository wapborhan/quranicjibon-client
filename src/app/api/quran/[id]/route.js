import { connectDatabase } from "../../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const id = await request.nextUrl.pathname.split("/").slice(-1)[0];

  const db = await connectDatabase();

  const suras = await db.collection("suras").findOne({ index: id });

  return NextResponse.json(suras);
};
