import type { MetaTagsProps } from "svelte-meta-tags";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const pageMetaTags: MetaTagsProps = {
		title: "Home",
	};

	return {
		pageMetaTags,
	};
};
