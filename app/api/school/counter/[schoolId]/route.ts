import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

// export const GET = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const id = params.id;
//     const data = await prisma.student.findUnique({
//       where: {
//         id : id,
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

// // delete student
// export const DELETE = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const id = params.id;
//     const data = await prisma.student.delete({
//       where: {
//         id,
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

export const PUT = async(
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const { maxRequestsPerStudent } = await req.json();
    const data = await prisma.school.update({
      where: {
        schoolId,
      },
      data: {
        maxRequestsPerStudent: maxRequestsPerStudent,
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



// // update student
// export const GET = async (
//   req: Request,
//   { params }: { params: { schoolId : string } }
// ) => {
//   try {
//     const schoolId = params.schoolId;
//     const data = await prisma.school.update({
//       where: {
//         schoolId,
//       },
//       data: {
//         requestCount: {
//           increment: 1,
//         },
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