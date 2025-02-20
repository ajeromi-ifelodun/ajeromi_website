import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder") || "Circulars_Directory/publication";

    const { resources } = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .max_results(57)
      .execute();

    const images = resources.map((image) => ({
      id: image.asset_id,
      name: image.public_id.split("/").pop(),
      url: image.secure_url,
    }));

    return NextResponse.json({ images },{ status: 200 });
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}