import connectToDb from "@/database/Db";
import Product from "@/models/productSchema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDb();
    console.log("inside");
    const extractData = await req.json();

    const newSavedProduct = await Product.create(extractData);

    if (newSavedProduct) {
      return  NextResponse.json(
        {
          success: true,
          message: "Sucessfully saved the Product",
        },
        { status: 201 }
      );
    } else {
      return  NextResponse.json(
        {
          success: false,
          message: "Failed to store the Product",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to store the Product",
      },
      { status: 200 }
    );
  } 
}
