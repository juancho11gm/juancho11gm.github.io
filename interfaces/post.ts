import { Author } from './author';

export type OrientationType = 'square' | 'landscape';

export type PostType = {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	orientation: OrientationType;
	author: Author;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
};
