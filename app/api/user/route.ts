import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface User {
  name: string;
  password: string;
  role: string;
  schoolId: string;
  phone: string;
  status: string;
  lastLogin: Date;
}

// get all users /api/user
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

// add new user data /api/user
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, password, role, schoolId, phone, status, lastLogin } =
    body;
  try {
    const data = await prisma.user.create({
      data: {
        name,
        password,
        role,
        schoolId,
        phone,
        status,
        lastLogin,
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

// delete all users  /api/user
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
