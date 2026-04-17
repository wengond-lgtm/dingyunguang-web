import { NextResponse } from "next/server";
import { getAllWorks } from "@/lib/notion";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const works = await getAllWorks();
    return NextResponse.json({ count: works.length, works });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}
