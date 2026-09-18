import type { MetaTagsProps } from "svelte-meta-tags";
import { GET_EXPERIENCE, hygraph } from "@/lib/graphql";
import type { GetExperienceQuery } from "@/lib/graphql/generated";
import type { PageServerLoad } from "./$types";

export const config = {
	isr: {
		expiration: 60,
	},
};

export const prerender = false;

export const load: PageServerLoad = async () => {
	let { workExperiences, courses } =
		await hygraph.request<GetExperienceQuery>(GET_EXPERIENCE);

	workExperiences = workExperiences.sort((a, b) => {
		const currentlyA = a.endDate == null || new Date(a.endDate) > new Date();
		const currentlyB = b.endDate == null || new Date(b.endDate) > new Date();
		if (currentlyA && !currentlyB) return -1;
		if (!currentlyA && currentlyB) return 1;
		return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
	});

	const pageMetaTags: MetaTagsProps = {
		title: "Experience",
	};

	return {
		workExperiences,
		courses,
		pageMetaTags,
	};
};
