import connectToDb from "@/database/Db";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDb();

    const { name, email } = await req.json();

    const newUser = await User.create({ name, email });

    if (newUser) {
      return NextResponse.json({ success: true, message: "User Registered " });
    }
    else{
        return NextResponse.json(
           { success: false,
            message: " failed to register new user"}
        )
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
};
