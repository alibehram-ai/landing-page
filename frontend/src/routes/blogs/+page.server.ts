import { client } from '$lib/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await client.fetch(`
		*[_type == "post"] | order(publishedAt desc) {
			_id,
			title,
			slug,
			mainImage,
			publishedAt,
			author->{
				name
			}
		}
	`);

	return {
		posts
	};
};
