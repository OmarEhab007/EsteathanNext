import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

interface Subscription {
  status: string;
  plan: string;
  startDate: Date;
  endDate: Date;
  schoolId: string;
  billId: string;
  createdAt: Date;
  updatedAt: Date;
}


// get subscription data by bill id /api/subscription/bill/[billId] by params

export const GET = async (
  req: Request,
  { params }: { params: { billId: string } }
) => {
  try {
    const billId = params.billId;
    const data = await prisma.subscription.findUnique({
      where: {
        billId: billId,
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

// delete subscription data by bill id /api/subscription/bill/[billId] by params

export const DELETE = async (
  req: Request,
  { params }: { params: { billId: string } }
) => {
  try {
    const billId = params.billId;
    const data = await prisma.subscription.delete({
      where: {
        billId,
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

// update subscription data by bill id /api/subscription/bill/[billId] by params

export const PUT = async (
  req: Request,
  { params }: { params: { billId: string } }
) => {
  try {
    const billId = params.billId;
    const body = await req.json();
    const { status, plan, startDate, endDate, schoolId } = body;
    const data = await prisma.subscription.update({
      where: {
        billId,
      },
      data: {
        status,
        plan,
        startDate,
        endDate,
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

