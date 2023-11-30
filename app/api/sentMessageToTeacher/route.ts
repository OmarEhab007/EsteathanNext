import { NextResponse } from "next/server";
// import prisma from "../../../lib/db";
import fetch from "node-fetch";

// export const POST = async (
//   req: Request,
// ) => {
//   try {
//     // Get the parentNumber and code from the request body
//     const body = await req.json();
//     const { parentNumber, code } = body;

//     // Send the POST request
//     const response = await fetch('https://wa.karzoun.app/api/send', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         number: parentNumber,
//         type: 'text',
//         message: `Validation Code is : ${code}`,
//         instance_id: '6568865B375E4',
//         access_token: '65686dcb208e8'
//       })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to send the POST request');
//     }

//     return NextResponse.json({ message: "OK", parentNumber }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error", error },
//       {
//         status: 500,
//       }
//     );
//   }
// };

export const POST = async (req: Request) => {
  try {
    // Get the parentNumber and code from the request body
    const body = await req.json();
    const { parentNumber, message } = body;

    // Create the URL with query parameters
    const params = new URLSearchParams({
      number: parentNumber,
      type: "text",
      message: `${message}`,
      instance_id: "6568865B375E4",
      access_token: "65686dcb208e8",
    });
    const url = "https://wa.karzoun.app/api/send?" + params.toString();

    // Send the GET request
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to send the GET request");
    }

    return NextResponse.json({ message: "OK", parentNumber }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};

