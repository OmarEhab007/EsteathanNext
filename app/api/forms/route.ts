import prisma from "../../../lib/db";
import { NextResponse } from "next/server";

interface Form {
  id: string;
  studentId: string;
  reason: string;
  attachment: string;
  parentNumber: string;
  verificationCode: string;
  status: string;
  approval: string;
  createdAt: Date;
  updatedAt: Date;
}

// GET /api/forms
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.form.findMany();
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

// add new form data  /api/forms
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const {
    studentId,
    reason,
    attachment,
    parentNumber,
    verificationCode,
    status,
    approval,
  } = body;
  try {
    const data = await prisma.form.create({
      data: {
        studentId,
        reason,
        attachment,
        parentNumber,
        verificationCode,
        status,
        approval,
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