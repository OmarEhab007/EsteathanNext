import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

// GET /api/forms
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.user.findMany();
    return NextResponse.json({ message: "OK", datas }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};

// add new form data  /api/forms
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const {
    username,
    password,
    role,
    phone,
  } = body;
  try {
    const data = await prisma.user.create({
      data: {
        username,
        password,
        role,
        phone,
      },
    });
    return NextResponse.json({ message: "OK", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
}

// delete all form data  /api/forms

export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.user.deleteMany();
    return NextResponse.json({ message: "OK", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
}
