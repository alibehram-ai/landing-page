import { createClient } from '@sanity/client';
import { getImageDimensions } from '@sanity/asset-utils';

export const client = createClient({
	projectId: 'gr9iah3f',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-12-04'
});

export function urlForImage(source: any) {
	if (!source?.asset?._ref) {
		return undefined;
	}

	const { width, height } = getImageDimensions(source);
	const refParts = source.asset._ref.split('-');
	const id = refParts.slice(1, -2).join('-');
	const format = refParts[refParts.length - 1];

	return `https://cdn.sanity.io/images/gr9iah3f/production/${id}-${width}x${height}.${format}`;
}

export interface Author {
	_id: string;
	name: string;
	slug: {
		current: string;
	};
	image?: {
		asset: {
			_ref: string;
		};
	};
	bio?: any[];
}

export interface Post {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	author: Author;
	mainImage?: {
		asset: {
			_ref: string;
		};
	};
	categories?: Array<{
		_id: string;
		title: string;
	}>;
	publishedAt: string;
	body?: any[];
}
