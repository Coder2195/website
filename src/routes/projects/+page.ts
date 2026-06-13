import type { MetaTagsProps } from "svelte-meta-tags";
import { GET_PROJECTS, hygraph } from "@/lib/graphql";
import type { GetProjectsQuery } from "@/lib/graphql/generated";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const data = await hygraph.request<GetProjectsQuery>(GET_PROJECTS);

	const pageMetaTags: MetaTagsProps = {
		title: "Projects",
	};

	return {
		...data,
		pageMetaTags,
	};
};
