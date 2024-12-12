import Keyv from 'keyv';

export const AppCache = new Keyv(undefined, {
	namespace: 'app',
	ttl: 60 * 1000 // 60 secs
});
