// import { NextResponse, NextRequest} from "next/server";
import prisma from "../../../../lib/db";

// search for a student by number and schoolId  /api/students/search
import { NextResponse, NextRequest } from "next/server";

export async function GET(req : NextRequest) {

  const url = new URL(req.url)
  const number = url.searchParams.get("number")
  const schoolId = url.searchParams.get("schoolId")

  try {
    const data = await prisma.form.findFirst({
      where: {
        studentId: number as string,
        schoolId: schoolId as string,
      },
       orderBy: {
    createdAt: 'desc',
  },
    });

    if (!data) {
      return NextResponse.json(
        { message: "No student found with the provided number and school ID" },
        { status: 404 }
      );
    }

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

