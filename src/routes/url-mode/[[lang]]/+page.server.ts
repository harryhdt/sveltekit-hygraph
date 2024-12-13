import { getProducts, language } from '$lib/server/api';
import { cacheHeaders } from '$lib/server/api/cache';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const lang = language(params.lang);
	//
	const data = await getProducts(lang);
	if (!data) {
		error(500, 'Something went wrong');
	}
	//
	setHeaders(cacheHeaders(60));
	//
	return {
		data,
		lang
	};
};
