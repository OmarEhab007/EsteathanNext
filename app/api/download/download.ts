// app/api/download/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filePath } = req.query;

    if (!filePath || Array.isArray(filePath)) {
        res.status(400).json({ error: 'Invalid file path' });
        return;
    }

    const absolutePath = path.resolve('./public', filePath);
    if (fs.existsSync(absolutePath)) {
        res.setHeader('Content-Disposition', `attachment; filename=${path.basename(filePath)}`);
        res.setHeader('Content-Type', 'application/octet-stream');
        fs.createReadStream(absolutePath).pipe(res);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
}
