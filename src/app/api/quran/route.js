import { connectDatabase } from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDatabase();

  const suras = await db.collection("suras").find({}).toArray();

  return NextResponse.json(suras);
};
