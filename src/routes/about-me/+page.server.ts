import type { MetaTagsProps } from "svelte-meta-tags";
import { GET_SKILLS, hygraph } from "@/lib/graphql";
import type { GetSkillsQuery } from "@/lib/graphql/generated";
import type { PageServerLoad } from "./$types";

export const config = {
	isr: {
		expiration: 60,
	},
};

export const prerender = "auto";

export const load: PageServerLoad = async () => {
	const pageMetaTags: MetaTagsProps = {
		title: "About Me",
	};

	const { skills } = await hygraph.request<GetSkillsQuery>(GET_SKILLS);

	return {
		pageMetaTags,
		skills,
	};
};
