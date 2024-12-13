import { getProducts, language } from '$lib/server/api';
import { AppCache, cacheHeaders } from '$lib/server/api/cache';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ProductType } from '$lib/type';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const lang = language(params.lang);
	//
	const cacheKey = `${lang}-products`;
	let data = await AppCache.get<ProductType[] | null>(cacheKey);
	if (!data) {
		data = await getProducts(lang);
		if (!data) {
			// handle error
			error(500, 'Something went wrong');
		}
		await AppCache.set(cacheKey, data);
	} else {
		console.log(`Cache hit: ${cacheKey}`);
	}
	//
	setHeaders(cacheHeaders(60));
	//
	return {
		data,
		lang
	};
};
