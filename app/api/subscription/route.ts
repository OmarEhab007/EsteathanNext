import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

interface Subscription {
  status: string;
  plan: string;
  startDate: Date;
  endDate: Date;
  schoolId: string;
  createdAt: Date;
  updatedAt: Date;
}


// get all subscriptions data  /api/subscriptions
export const GET = async (req: Request, res: Response) => {
  try {
    const datas = await prisma.subscription.findMany();
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
  const { status, plan, startDate, endDate, schoolId } = body;
  try {
    const data = await prisma.subscription.create({
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
}


// delete all subscriptions data  /api/subscriptions
export async function DELETE(req: Request, res: Response) {
  try {
    const data = await prisma.subscription.deleteMany();
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
