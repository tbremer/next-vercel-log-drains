import { STATUS_CODES } from 'node:http';

export function POST() {
	if (!process.env.vercelVerify) {
		return new Response(null, {
			status: 500,
			statusText: STATUS_CODES[500],
		});
	}

	const headers = new Headers({
		'x-vercel-verify': process.env.vercelVerify,
	});

	return new Response(null, { headers });
}
