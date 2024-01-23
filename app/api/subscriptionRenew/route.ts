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

// renew a subscription  /api/subscriptions/renew
// renew a subscription  /api/subscriptions/renew
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { billId, plan, schoolId } = body;
  try {
    // Find the bill
    const bill = await prisma.bill.findUnique({
      where: {
        id: billId,
      },
    });

    if (!bill) {
      return NextResponse.json(
        { message: "Error", error: "Bill not found" },
        {
          status: 404,
        }
      );
    }

    // Find the subscription associated with the school with schoolId
    const school = await prisma.school.findUnique({
      where: {
        schoolId: schoolId,
      },
    });

    if (!school) {
      return NextResponse.json(
        { message: "Error", error: "School not found" },
        {
          status: 404,
        }
      );
    }

    const subscription = await prisma.subscription.findFirst({
      where: {
        schoolId: schoolId,
      },
    });

    if (!subscription) {
      return NextResponse.json(
        { message: "Error", error: "Subscription not found" },
        {
          status: 404,
        }
      );
    }

    // Calculate the new end date based on the plan
    const endDate = calculateEndDate(subscription.endDate, plan);

    // Update the subscription
    const data = await prisma.subscription.update({
      where: {
        id: subscription.id,
      },
      data: {
        endDate,
        billId: billId,
      },
    });

    if (!data) {
      return NextResponse.json(
        { message: "Error", error: "Subscription not found" },
        {
          status: 404,
        }
      );
    }

    const updatedBill = await prisma.bill.update({
      where: {
        id: billId,
      },
      data: {
        status: "accepted",
      },
    });

    if (!updatedBill) {
      return NextResponse.json(
        { message: "Error", error: "Bill not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({ message: "OK", updatedBill }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
}

// Function to calculate the new end date based on the plan
function calculateEndDate(currentEndDate: Date, plan: string): Date {
  const newEndDate = new Date(currentEndDate);
  switch (plan) {
    case "oneSemester":
      newEndDate.setMonth(newEndDate.getMonth() + 3);
      break;
    case "twoSemester":
      newEndDate.setMonth(newEndDate.getMonth() + 6);
      break;
    case "fullYear":
      newEndDate.setFullYear(newEndDate.getFullYear() + 1);
      break;
    // Add more cases if you have more plans
  }
  return newEndDate;
}

// get all subscriptions data  /api/subscriptions
// export const GET = async (req: Request, res: Response) => {
//   try {
//     const datas = await prisma.subscription.findMany();
//     return NextResponse.json({ message: "OK", datas }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error", error },
//       {
//         status: 500,
//       }
//     );
//   }
// };

// // add new subscription data  /api/subscriptions
// export async function POST(req: Request, res: Response) {
//   const body = await req.json();
//   const { status, plan, startDate, endDate, billId ,schoolId } = body;
//   try {
//     const data = await prisma.subscription.create({
//       data: {
//         status,
//         plan,
//         startDate,
//         endDate,
//         schoolId,
//         billId,
//       },
//     });
//     return NextResponse.json({ message: "OK", data }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error", error },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// // delete all subscriptions data  /api/subscriptions
// export async function DELETE(req: Request, res: Response) {
//   try {
//     const data = await prisma.subscription.deleteMany();
//     return NextResponse.json({ message: "OK", data }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error", error },
//       {
//         status: 500,
//       }
//     );
//   }
// }
