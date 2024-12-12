export type ProductType = {
	id: number;
	name: string;
	slug: string;
	description: {
		text: string;
		markdown: string;
	};
	products: ProductType[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type APIResponse<T = any> = {
	success: boolean;
	message?: string;
	data?: T;
};
