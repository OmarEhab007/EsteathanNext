import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Semester {
  name: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// get all semesters data  /api/semesters

export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.semester.findMany();
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

// add new semester data  /api/semesters

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, startDate, endDate } = body;
  try {
    const data = await prisma.semester.create({
      data: {
        name,
        startDate,
        endDate,
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


// delete all semesters data  /api/semesters

export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.semester.deleteMany();
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
