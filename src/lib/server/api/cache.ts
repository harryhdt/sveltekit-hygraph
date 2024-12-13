import Keyv from 'keyv';

export const AppCache = new Keyv(undefined, {
	namespace: 'app',
	ttl: 60 * 1000 // 60 secs
});

export const cacheHeaders = {
	'cache-control': 'max-age=5', // 5 sec
	Vary: 'Cookie, Accept-Language' // not support by cloudflare pages :(
};
