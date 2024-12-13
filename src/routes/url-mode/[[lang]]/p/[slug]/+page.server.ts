import { getProduct, language } from '$lib/server/api';
import { cacheHeaders } from '$lib/server/api/cache';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const lang = language(params.lang);
	//
	const data = await getProduct(lang, params.slug);
	if (!data) {
		error(404, 'Product not found');
	}
	//
	setHeaders(cacheHeaders(60));
	//
	return {
		data,
		lang
	};
};
