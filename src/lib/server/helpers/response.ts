import type { APIResponse } from '$lib/type';
import { json } from '@sveltejs/kit';

export const apiResponse = (res: APIResponse, options?: ResponseInit | undefined) => {
	return json(res, options);
};
