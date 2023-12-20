import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Bill {
  id: string;
  name: string;
  password: string;
  role: string;
  schoolId: string;
  phone: string;
  status: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

// get all bill data  /api/bill
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.bill.findMany();
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

// add new bill data  /api/bill
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { status, schoolId, name, phone, address, attachment, plan, history } =
    body;
  try {
    const data = await prisma.bill.create({
      data: {
        status,
        schoolId,
        name,
        phone,
        address,
        attachment,
        plan,
        history,
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

// delete all bill data  /api/bill
export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.bill.deleteMany();
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
