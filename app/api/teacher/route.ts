import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Teacher {
  name: string;
  phone: string;
  schoolId: string;
  createdAt: Date;
  updatedAt: Date;
}

// get all students data  /api/students
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.teacher.findMany();
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

// add new student data  /api/students

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, phone, schoolId } = body;
  try {
    const data = await prisma.teacher.create({
      data: {
        name,
        phone,
        schoolId,
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

// delete all teachers data  /api/teachers

export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.teacher.deleteMany();
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