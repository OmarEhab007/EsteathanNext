import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export const GET = async (
  req: Request,
  { params }: { params: { number: string } }
) => {
  try {
    const number = params.number;
    const data = await prisma.student.findUnique({
      where: {
        number : number,
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

// delete student
export const DELETE = async (
  req: Request,
  { params }: { params: { number: string } }
) => {
  try {
    const id = params.number;
    const data = await prisma.student.delete({
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

// update student
export const PUT = async (
  req: Request,
  { params }: { params: { number: string } }
) => {
  try {
    const id = params.number;
    const body = await req.json();
    const { number, name, class: className, year, parentNumber, schoolId } = body;
    const data = await prisma.student.update({
      where: {
        id,
      },
      data: {
        number,
        name,
        class: className,
        year,
        parentNumber,
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
};
