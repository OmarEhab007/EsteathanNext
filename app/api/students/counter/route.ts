import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

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
//     return NextResponse.jso(
//       { message: "Error", error },
//       {
//         status: 500,
//       }
//     );
//   }
// };

// update student
// export const PUT = async (
//   req: Request,
//   { params }: { params: { id : string } }
// ) => {
//   try {
//     const id = params.id;
//     const body = await req.json();
//     const data = await prisma.student.update({
//       where: {
//         id,
//       },
//       data: {
        
//         requestCount: { increment: 1 },
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

// update all students counter to 0
export const GET = async (req: Request) => {
  try {
    
    const data = await prisma.student.updateMany({
      data: {
        requestCount: 0,
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
