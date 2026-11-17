import adapter from "@sveltejs/adapter-vercel";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({
				images: {
					sizes: [
						32, 48, 64, 96, 128, 160, 192, 224, 256, 288, 320, 384, 448, 512,
						640, 768, 896, 1024, 1280, 120, 240, 480, 720, 960, 1080, 1200,
					],
					formats: ["image/avif", "image/webp"],
					minimumCacheTTL: 300,
					domains: [
						"coder2195.dev",
						"beta.coder2195.dev",
						"www.coder2195.dev",
						"us-east-1.graphassets.com",
					],
				},
			}),
			prerender: { handleHttpError: "warn" },
		}),
		Icons({ compiler: "svelte" }),
	],
	server: {
		port: 3000,
		strictPort: false,
	},
});
