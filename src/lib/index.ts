import { invalidateAll } from '$app/navigation';
import type { APIResponse } from './type';

export const toggleLang = async (lang: string) => {
	try {
		const res = await fetch('/api/lang', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				lang: lang === 'en' ? 'fr' : 'en'
			})
		});
		const { success, message }: APIResponse = await res.json();
		if (success) {
			// alert(message || 'Lang changed');
			await invalidateAll();
		} else {
			alert(message);
		}
	} catch (error) {
		console.warn(error);
	}
};
