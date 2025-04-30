import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET() {
  try {
    const response = await cloudinary.search
      .expression("folder:portfolio")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    const urls = response.resources.map(
      (img: { secure_url: string }) => img.secure_url
    );

    return NextResponse.json({ images: urls });
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
