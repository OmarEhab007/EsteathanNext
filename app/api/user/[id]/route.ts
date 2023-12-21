import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface User {
  name: string;
  password: string;
  role: string;
  schoolId: string;
  phone: string;
  status: string;
  lastLogin: Date;
}

// get  bill user by id  /api/user/[id] by params
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.user.findUnique({
      where: {
        id: id,
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
};

// delete user data by id  /api/user/[id] by params
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.user.delete({
      where: {
        id,
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
};

// update user data by id  /api/user/[id] by params
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const body = await req.json();
    const { name, password, role, schoolId, phone, status, lastLogin } = body;
    const data = await prisma.user.update({
      where: {
        id,
      },
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
};
