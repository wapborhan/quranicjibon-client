import { connectDatabase } from "../../../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const id = await request.nextUrl.pathname.split("/").slice(-1)[0];

  const db = await connectDatabase();

  const suras_ar = await db
    .collection("quran_ar")
    .find({
      sura_id: id,
    })
    .toArray();
  const suras_bn = await db
    .collection("quran_bn")
    .find({
      sura_id: id,
    })
    .toArray();

  const mergedArray = suras_ar.map((item, index) => ({
    ...item,
    ...suras_bn[index],
  }));

  return NextResponse.json(mergedArray);
};
