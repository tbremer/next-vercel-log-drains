import { STATUS_CODES } from 'node:http';

export function POST() {
	const secret = process.env.VERCEL_VERIFY;

	if (!secret) {
		return new Response(null, {
			status: 500,
			statusText: STATUS_CODES[500],
		});
	}

	const headers = new Headers({
		'x-vercel-verify': secret,
	});

	return new Response(null, { headers });
}
