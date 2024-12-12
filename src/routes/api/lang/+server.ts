import { SUPPORTED_LANGUAGES } from '$lib/server/api';
import { AppCache } from '$lib/server/api/cache';
import { apiResponse } from '$lib/server/helpers/response';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const body = await request.json();
	const lang = body.lang;
	if (!SUPPORTED_LANGUAGES.includes(lang)) {
		return apiResponse(
			{
				success: false,
				message: 'Invalid language'
			},
			{
				status: 400
			}
		);
	}
	//
	await AppCache.clear();
	//
	cookies.set('lang', lang, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365 * 100, // 100 years
		httpOnly: true
	});
	//
	return apiResponse(
		{
			success: true
		},
		{
			status: 200
		}
	);
};
