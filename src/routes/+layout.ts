import type { MetaTagsProps } from "svelte-meta-tags";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	const baseMetaTags: MetaTagsProps = Object.freeze({
		title: "Unfinished Page",
		titleTemplate: "%s | Coder2195",
		description:
			"Coder2195 is a seasoned programmer with 7 years of programming experience. She shares her project and coding journey through this website!",
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			siteName: "Coder2195",
			images: [
				{
					url: "/icon.png",
					alt: "Coder2195 Icon",
					width: 96,
					height: 96,
				},
			],
		},
	});

	return {
		pathname,
		baseMetaTags,
	};
};

export const prerender = true;
