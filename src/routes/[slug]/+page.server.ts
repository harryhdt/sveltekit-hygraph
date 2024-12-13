import { getProduct } from '$lib/server/api';
import { AppCache, cacheHeaders } from '$lib/server/api/cache';
import type { ProductType } from '$lib/type';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params, setHeaders }) => {
	const parentData = await parent();
	const lang = parentData.lang;
	//
	const cacheKey = `${lang}-product-${params.slug}`;
	let data = await AppCache.get<ProductType | null>(cacheKey);
	if (!data) {
		data = await getProduct(lang, params.slug);
		if (!data) {
			// handle error
			error(404, 'Product not found');
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
