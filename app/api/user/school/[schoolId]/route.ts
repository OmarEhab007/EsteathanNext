import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

interface User {
  name: string;
  password: string;
  role: string;
  schoolId: string;
  phone: string;
  status: string;
  lastLogin: Date;
}

// get latest user data /api/user/school/[schoolId] if have two or more user with same schoolId take the latest one
export const GET = async (
  req: Request,
  { params }: { params: { schoolId: string } }
) => {
  try {
    const schoolId = params.schoolId;
    const data = await prisma.user.findFirst({
      where: {
        schoolId: schoolId,
      },
      orderBy: {
        createdAt: "desc",
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