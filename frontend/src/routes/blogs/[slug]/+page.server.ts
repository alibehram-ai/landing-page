import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await client.fetch(
		`
		*[_type == "post" && slug.current == $slug][0] {
			_id,
			title,
			slug,
			mainImage,
			publishedAt,
			body,
			author->{
				name,
				image,
				bio
			},
			categories[]->{
				_id,
				title
			}
		}
	`,
		{ slug: params.slug }
	);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
