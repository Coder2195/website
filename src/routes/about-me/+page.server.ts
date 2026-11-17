import type { MetaTagsProps } from "svelte-meta-tags";
import type { GetSkillsQuery } from "#lib/graphql/generated.ts";
import { GET_SKILLS, hygraph } from "#lib/graphql/index.ts";
import type { PageServerLoad } from "./$types";

export const config = {
	isr: {
		expiration: 60,
	},
};

export const prerender = false;

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
