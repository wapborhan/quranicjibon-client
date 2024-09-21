// app/api/allah-name/route.js
import { connectDatabase } from "@/utils/db"; // adjust path if necessary
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Connect to the database
    const db = await connectDatabase();

    // Fetch all names from 'allah_name' collection
    const names = await db.collection("allah_name").find({}).toArray();

    // Return the names as JSON response
    return NextResponse.json(names);
  } catch (error) {
    console.error("Error fetching Allah names:", error);
    return NextResponse.json(
      { error: "Failed to fetch Allah names" },
      { status: 500 }
    );
  }
};
