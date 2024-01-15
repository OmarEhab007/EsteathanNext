import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

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

export const GET = async (req: Request, res: Response) => {
  try {
    // check start date and end date and if it ended change the status to invalid
    const subscriptions = await prisma.subscription.findMany();
    const now = new Date();
    for (let subscription of subscriptions) {
      if (subscription.endDate < now) {
        await prisma.subscription.update({
          where: { id: subscription.id },
          data: { status: "invalid" },
        });
      }
    }
    return NextResponse.json({ message: "Subscriptions updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
