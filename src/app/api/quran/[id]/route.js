import { connectDatabase } from "../../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  console.log(params);
  const db = await connectDatabase();

  const suras = await db.collection("suras").find({}).toArray();

  return NextResponse.json(suras);
};
