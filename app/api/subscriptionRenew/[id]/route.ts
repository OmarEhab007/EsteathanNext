import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

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

// get subscription data by id  /api/subscription/[id] by params
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.subscription.findUnique({
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

// delete subscription data by id  /api/subscription/[id] by params
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const data = await prisma.subscription.delete({
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

// update subscription data by id  /api/subscription/[id] by params
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const body = await req.json();
    const { status, plan, startDate, endDate, schoolId, billId } = body;
    const data = await prisma.subscription.update({
      where: {
        id,
      },
      data: {
        status,
        plan,
        startDate,
        endDate,
        schoolId,
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

