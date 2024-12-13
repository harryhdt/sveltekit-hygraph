import { getProduct } from '$lib/server/api';
// import { AppCache, cacheHeaders } from '$lib/server/api/cache';
// import type { ProductType } from '$lib/type';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { cacheHeaders } from '$lib/server/api/cache';

export const load: PageServerLoad = async ({ parent, params, setHeaders }) => {
	const parentData = await parent();
	const lang = parentData.lang;
	//
	const data = await getProduct(lang, params.slug);
	if (!data) {
		// handle error
		error(404, 'Product not found');
	}
	//
	setHeaders(cacheHeaders);
	//
	return {
		data
	};
};
