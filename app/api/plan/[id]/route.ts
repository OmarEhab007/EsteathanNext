import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Plan {
  name: string;
  price: number;
  duration: number;
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
    const data = await prisma.plan.findUnique({
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
    const data = await prisma.plan.delete({
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
    const { name, price, duration } = body;
    const data = await prisma.plan.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        duration,
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

