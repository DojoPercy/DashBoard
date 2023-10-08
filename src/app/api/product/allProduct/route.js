import connectToDb from "@/database/Db"
import Product from "@/models/productSchema";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req){
    try {
        await connectToDb();
        const getAllProducts = await Product.find({});

        if(getAllProducts){
            return NextResponse.json({
                success: true,
                data: getAllProducts
            }, {status:201})
        }else{
            return NextResponse.json({
                success:false,
                message: 'failed to fetch the Products! please try again'
            }, {status:500})
        }

    } catch (error) {
        console.log(error);
        return new NextResponse.json(
          {
            success: false,
            message: "Failed to store the Product",
          },
          { status: 500 }
        );
    }
}           