export const getElapsedTime = (label: string, start: number) => {
	const end = new Date().getTime();
	console.log('Hygraph:', label, end - start + 'ms');
};
