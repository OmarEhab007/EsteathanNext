import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

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

// get all school data  /api/schools
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.school.findMany();
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


// add new school data  /api/schools
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { schoolId, name, phone, district, office, subscriptionId } = body;

  // Check if all required fields are provided
  if (!schoolId ||!name ||!phone ||!district ||!office ||!subscriptionId) {
    return NextResponse.json(
      { message: "Error", error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.school.create({
      data: {
        schoolId,
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
      { status: 500 }
    );
  }
}

// delete all teachers data  /api/teachers

export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.school.deleteMany();
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