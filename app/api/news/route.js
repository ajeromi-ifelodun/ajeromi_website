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
    //console.time("API Execution Time"); 
    console.log("API Hit on Fetch Images Endpoint");

    try {
        const { searchParams } = new URL(req.url);
        const articleId = searchParams.get("article_id");

        if (!articleId) {
            //console.timeEnd("API Execution Time"); 
            return NextResponse.json(
                { error: "Article ID is required to load images" },
                { status: 400 }
            );
        }

        const folder = `Circulars_Directory/${articleId}`;

        //console.time("Cloudinary Fetch Time"); 
        const { resources } = await cloudinary.search
            .expression(`folder:${folder}`)
            .max_results(20)
            .execute();
        //console.timeEnd("Cloudinary Fetch Time");  Cloudinary timer

        if (!resources.length) {
            //console.timeEnd("API Execution Time"); 
            return NextResponse.json(
                { message: `No images available for article ${articleId}` },
                { status: 400 }
            );
        }


        const images = resources.map((image) => ({
          id: image.asset_id,
          optimized_url: cloudinary.url(image.secure_url, {
            transformation: [
              { quality: "good" }, // Auto quality adjustment
              { fetch_format: "auto" }, // Optimized format (WebP, AVIF, etc.)
            ],
          }),
        }));

        //console.timeEnd("API Execution Time"); 
        return NextResponse.json({ images }, { status: 200 });

    } catch (error) {
        console.error("Failed Cloudinary Fetch", error);
        //console.timeEnd("API Execution Time"); 
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}