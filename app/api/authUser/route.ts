import { connectionStr } from "@/lib/db";

import { User } from "@/lib/model/user";

import { NextResponse } from "next/server";

import mongoose from "mongoose";
import { verifyJwt } from "@/lib/jwt";

export type DataProps = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  result?: string;
};

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized from authUser",
      }),
      { status: 401 }
    );
  }
  let user: DataProps[] = [];
  let success = true;

  try {
    await mongoose.connect(connectionStr);
    user = await User.find();
  } catch (error) {
    user = [];
    success: false;
  }
  return NextResponse.json({ user, success });
}

export async function POST(req: Request) {
  const payload: DataProps = await req.json();

  try {
    await mongoose.connect(connectionStr);

    const user = await new User(payload).save();

    return NextResponse.json({ user, success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { result: "error", success: false },
      { status: 500 }
    );
  }
}
