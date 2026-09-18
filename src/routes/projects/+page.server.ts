import type { MetaTagsProps } from "svelte-meta-tags";
import { GET_PROJECTS, hygraph } from "@/lib/graphql";
import type { GetProjectsQuery } from "@/lib/graphql/generated";
import type { PageServerLoad } from "./$types";

export const config = {
	isr: {
		expiration: 60,
	},
};

export const prerender = false;

export const load: PageServerLoad = async () => {
	const data = await hygraph.request<GetProjectsQuery>(GET_PROJECTS);

	const pageMetaTags: MetaTagsProps = {
		title: "Projects",
	};

	return {
		...data,
		pageMetaTags,
	};
};
