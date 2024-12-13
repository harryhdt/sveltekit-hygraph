import { getProducts } from '$lib/server/api';
import { AppCache, cacheHeaders } from '$lib/server/api/cache';
import type { ProductType } from '$lib/type';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, setHeaders }) => {
	const parentData = await parent();
	const lang = parentData.lang;
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
	setHeaders(cacheHeaders);
	//
	return {
		data
	};
};
