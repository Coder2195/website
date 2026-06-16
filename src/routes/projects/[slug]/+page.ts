import { error } from "@sveltejs/kit";
import type { MetaTagsProps, OpenGraph, Twitter } from "svelte-meta-tags";
import { GET_PROJECT, hygraph } from "@/lib/graphql";
import type {
	GetProjectQuery,
	GetProjectQueryVariables,
} from "@/lib/graphql/generated";
import { addQueryParams } from "@/lib/url";
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

	const isVideo =
		project.embed?.includes("youtube.com/") ||
		project.embed?.includes("youtu.be/");

	const videoLink =
		isVideo &&
		// biome-ignore lint/style/noNonNullAssertion: embed is already checked
		addQueryParams(project.embed!, {
			autoplay: 1,
		});

	const video: OpenGraph = videoLink
		? {
				type: "video.other",
				videos: [
					{
						url: videoLink,
						secureUrl: videoLink,
						type: "text/html",
						width: 1280,
						height: 720,
					},
				],
			}
		: {};

	const twitterVideo: Twitter = videoLink
		? {
				cardType: "player",
				player: videoLink,
				playerStream: videoLink,
				playerHeight: 720,
				playerWidth: 1280,
			}
		: {};

	const pageMetaTags: MetaTagsProps = {
		title: `Project: ${project.title}`,
		description: project.excerpt || "Check out this cool project I made!",
		openGraph: {
			...video,
			images: [
				{
					url: project.coverImage?.url || "/icon.png",
				},
			],
		},
		twitter: {
			cardType: "summary_large_image",
			...twitterVideo,
		},
	};

	return {
		project,
		pageMetaTags,
	};
};
