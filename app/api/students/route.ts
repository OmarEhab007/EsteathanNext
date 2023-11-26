import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Student {
  id: string;
  number: string;
  name: string;
  class: string;
  year: number;
  parentNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

// get all students data  /api/students
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.student.findMany();
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
  const { number, name, class: className, year, parentNumber } = body;
  try {
    const data = await prisma.student.create({
      data: {
        number,
        name,
        class: className,
        year,
        parentNumber,
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
