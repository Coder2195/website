import { error } from "@sveltejs/kit";
import type { MetaTagsProps } from "svelte-meta-tags";
import { GET_PROJECT, hygraph } from "@/lib/graphql";
import type {
	GetProjectQuery,
	GetProjectQueryVariables,
} from "@/lib/graphql/generated";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const { project } = await hygraph.request<
		GetProjectQuery,
		GetProjectQueryVariables
	>(GET_PROJECT, {
		slug: params.slug,
	});

	if (!project) {
		error(404, "Project not found");
	}

	const pageMetaTags: MetaTagsProps = {
		title: `Project: ${project.title}`,
		description: project.excerpt || "Check out this cool project I made!",
		openGraph: {
			images: [
				{
					url: project.coverImage?.url || "/icon.png",
				},
			],
		},
		twitter: {
			cardType: "summary_large_image",
		},
	};

	return {
		project,
		pageMetaTags,
	};
};
