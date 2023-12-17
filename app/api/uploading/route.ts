// app/api/upload/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from  "../../../utils/cloudinary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Assuming the file is sent in the request body under 'file'
      const fileStr = req.body.file;
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'wjlhuu5n'
      });

      res.status(200).json({ url: uploadedResponse.secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
