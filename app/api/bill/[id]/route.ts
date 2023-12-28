import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Bill {
  status: string;
  schoolId: string;
  schoolName: string;
  managerName: string;
  phone: string;
  district: string;
  office: string;
  attachment: string;
  plan: string;
  history: string;
  createdAt: Date;
  updatedAt: Date;
}




// get  bill data by id  /api/bill/[id] by params
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.bill.findUnique({
      where: {
        id: id,
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

// delete bill data by id  /api/bill/[id] by params
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.bill.delete({
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

// update bill data by id  /api/bill/[id] by params
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const body = await req.json();
    const { status, schoolId,  schoolName, managerName, phone, district, office, attachment, plan, history  } = body;
    const data = await prisma.bill.update({
      where: {
        id,
      },
      data: {
        status,
        schoolId,
        schoolName,
        managerName,
        phone,
        district,
        office,
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
};

