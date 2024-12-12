import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const lang = cookies.get('lang') || 'en'; // fallback is 'en'
	return {
		lang
	};
};
