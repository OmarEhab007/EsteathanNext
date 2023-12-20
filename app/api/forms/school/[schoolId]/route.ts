import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

// GET /api/forms/school/[schoolId] (get all form data by schoolId)
export const GET = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.form.findMany({
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

// DELETE /api/forms/school/[schoolId] (delete all form data by schoolId)
export const DELETE = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.form.deleteMany({
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