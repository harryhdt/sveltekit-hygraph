import { GraphQLClient } from 'graphql-request';
import type { ProductType } from '../../type';
import { HYGRAPH_URL } from '$env/static/private';
import { getElapsedTime } from '../helpers';

const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: {}
});

export const SUPPORTED_LANGUAGES = ['en', 'fr'];
const language = (lang: string) => {
	if (!SUPPORTED_LANGUAGES.includes(lang)) lang = 'en'; // fallback
	return lang;
};

export const getProducts = async (lang: string | undefined = 'en') => {
	const startTime = new Date().getTime();
	try {
		lang = language(lang);
		//
		const products = lang === 'fr' ? 'productsFrs' : 'products';
		const data = await hygraph.request<{ [key: string]: ProductType[] }>(
			`
				{
					${products} {
						id
						name
						slug
						description {
							text
							markdown
						}
						products {
							id
							name
							slug
							description {
								text
								markdown
							}
						}
					}
				}
			`
		);
		return data[products];
	} catch (error) {
		console.log(error);
		return null;
	} finally {
		getElapsedTime('getProducts', startTime);
	}
};

export const getProduct = async (lang: string | undefined = 'en', slug: string) => {
	const startTime = new Date().getTime();
	try {
		lang = language(lang);
		//
		const product = lang === 'fr' ? 'productsFr' : 'product';
		const data = await hygraph.request<{ [key: string]: ProductType }>(
			`
				{
					${product}(where: { slug: "${slug}" }) {
						id
						name
						slug
						description {
							text
							markdown
						}
						products {
							id
							name
							slug
							description {
								text
								markdown
							}
						}
					}
				}
			`
		);
		return data[product];
	} catch (error) {
		console.log(error);
		return null;
	} finally {
		getElapsedTime(`getProduct '${slug}'`, startTime);
	}
};
