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

// export const POST = async (req: Request) => {
//   try {
//     // Get the parentNumber and code from the request body
//     const body = await req.json();
//     const { parentNumber, code } = body;

//     // Create the URL with query parameters
//     const params = new URLSearchParams({
//       number: parentNumber,
//       type: "text",
//       message: code,
//       instance_id: "659083772FEAF",
//       access_token: "657080406f853",
//     });
//     const url = "https://wa.karzoun.app/api/send?" + params.toString();

//     // Send the GET request
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Failed to send the GET request");
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
    const { parentNumber, code } = body;

    // Create the URL with query parameters
    const params = new URLSearchParams({
      appkey: 'ec2d8e55-c439-4d9b-8c2f-f58d494a53ab',
      authkey: 'O5DWqlwlKk65geoQO1ydjGQSxeTTOchgOfyP9nWw2aIt5PJsb1',
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: parentNumber,
      type: "template",
      template: JSON.stringify({
        name: "regestration_code",
        language: {
          code: "ar",
          policy: "deterministic"
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: code
              }
            ]
          },
          {
            type: "button",
            sub_type: "url",
            index: 0,
            parameters: [
              {
                type: "text",
                text: code
              }
            ]
          }
        ]
      })
      // message: code,
      
    });

    const url = `https://karzoun.app/api/send?${params.toString()}`;

    // Send the POST request
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to send the POST request');
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


// export const POST = async (req: Request) => {
//   try {
//     // Get the parentNumber and code from the request body
//     const body = await req.json();
//     const { parentNumber, code } = body;

//     // Create the data object
//     const data = {
//       "authkey": "O5DWqlwlKk65geoQO1ydjGQSxeTTOchgOfyP9nWw2aIt5PJsb1",
//       "appkey": "ec2d8e55-c439-4d9b-8c2f-f58d494a53ab",
//       "messaging_product": "whatsapp",
//       "recipient_type": "individual",
//       "to": parentNumber,
//       "type": "template",
//       "template": {
//           "name": "regestration_code",
//           "language": {
//               "code": "ar",
//               "policy": "deterministic"
//           },
//           "components": [
//               {
//                   "type": "body",
//                   "parameters": [
//                       {
//                           "type": "text",
//                           "text": code
//                       }
//                   ]
//               },
//               {
//                   "type": "button",
//                   "sub_type": "url",
//                   "index": 0,
//                   "parameters": [
//                       {
//                           "type": "text",
//                           "text": code
//                       }
//                   ]
//               }
//           ]
//       }
//     };

//     // Send the POST request
//     const response = await fetch('https://karzoun.app/api/send', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
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