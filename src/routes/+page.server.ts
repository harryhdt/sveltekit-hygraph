import { getProducts } from '$lib/server/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { cacheHeaders } from '$lib/server/api/cache';

export const load: PageServerLoad = async ({ parent, setHeaders }) => {
	const parentData = await parent();
	const lang = parentData.lang;
	//
	const data = await getProducts(lang);
	if (!data) {
		// handle error
		error(500, 'Internal server error');
	}
	//
	setHeaders(cacheHeaders);
	//
	return {
		data
	};
};
