import type { NextApiRequest, NextApiResponse } from 'next';
import { webcrack } from 'webcrack';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { code } = req.body;
  if (typeof code !== 'string') return res.status(400).json({ error: 'Invalid input' });
  try {
    const result = await webcrack(code);
    res.status(200).json({ code: result.code });
  } catch (err) {
    res.status(500).json({ error: 'Failed to deobfuscate' });
  }
}
