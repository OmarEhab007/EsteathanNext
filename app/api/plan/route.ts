import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Plan {
  name: string;
  price: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}


// get all subscriptions data  /api/subscriptions
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.plan.findMany();
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

// add new subscription data  /api/subscriptions
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, price, duration } = body;
  try {
    const data = await prisma.plan.create({
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
}


// delete all subscriptions data  /api/subscriptions
export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.plan.deleteMany();
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
