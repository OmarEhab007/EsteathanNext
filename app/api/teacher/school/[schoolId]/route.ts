import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

// GET /api/teacher/school/[schoolId]
export const GET = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.teacher.findMany({
      where: {
        schoolId: schoolId,
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

// DELETE /api/teacher/school/[schoolId] (delete all teacher data by schoolId)
export const DELETE = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.teacher.deleteMany({
      where: {
        schoolId: schoolId,
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