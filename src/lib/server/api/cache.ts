import Keyv from 'keyv';

export const AppCache = new Keyv(undefined, {
	namespace: 'app',
	ttl: 60 * 1000 // 60 secs
});

// 5 sec
export const cacheHeaders = (maxAge = 5) => ({
	'cache-control': `max-age=${maxAge}`,
	Vary: 'Cookie, Accept-Language' // not support by cloudflare pages :(
});
