import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface school {
  schoolId: string;
  name: string;
  phone: string;
  district: string;
  office: string;
  subscriptionId: string;
  createdAt: Date;
  updatedAt: Date;
}

// GET /api/school/[schoolId] 
export const GET = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.school.findMany({
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

// PUT /api/school/[schoolId]
export const PUT = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  const body = await req.json();
  const { name, phone, district, office, subscriptionId } = body;
  try {
    const schoolId = params.schoolId;
    const data = await prisma.school.updateMany({
      where: {
        schoolId: schoolId,
      },
      data: {
        name,
        phone,
        district,
        office,
        subscriptionId,
        
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

// DELETE /api/school/[schoolId]
export const DELETE = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.school.deleteMany({
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