import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

interface school {
  schoolId: string;
  name: string;
  phone: string;
  district: string;
  office: string;
  subscriptionId: string;
  createdAt: Date;
  updatedAt: Date;
}


export const GET = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;

    // Fetch the school data
    const school = await prisma.school.findUnique({
      where: {
        schoolId: schoolId,
      },
    });

    // Fetch the subscription data
    const subscription = await prisma.subscription.findFirst({
      where: {
        schoolId: schoolId,
      },
    });

    // Fetch the bill data
    const bill = await prisma.bill.findFirst({
      where: {
        schoolId: schoolId,
      },
    });

    // Combine the data
    const data = {
      school,
      subscription,
      bill,
    };

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

// // GET /api/school/[schoolId] 
// export const GET = async (
//   req: Request,
//   { params }: { params: { schoolId: string } }
// ) => {
//   try {
//     const schoolId = params.schoolId;
//     const data = await prisma.school.findMany({
//       where: {
//         schoolId: schoolId,
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
// };

// DELETE /api/school/[schoolId]
export const DELETE = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;

    // Delete the subscription data
    await prisma.subscription.deleteMany({
      where: {
        schoolId: schoolId,
      },
    });

    // Delete the bill data
    await prisma.bill.deleteMany({
      where: {
        schoolId: schoolId,
      },
    });

    // Delete the school data
    const data = await prisma.school.delete({
      where: {
        schoolId: schoolId,
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