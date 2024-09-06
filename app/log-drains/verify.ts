import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';

export async function verifySignature(req: NextRequest) {
	const secret = process.env.LOG_DRAIN_SECRET;
	if (!secret) return false;

	const header = req.headers.get('x-vercel-signature');
	const signature = crypto
		.createHmac('sha1', secret)
		.update(JSON.stringify(req.body))
		.digest('hex');

	return signature === header;
}
