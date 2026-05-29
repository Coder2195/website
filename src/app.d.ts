// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		declare module "virtual:icons/*" {
			import { SvelteComponent } from "svelte";
			import type { SvelteHTMLElements } from "svelte/elements";
			export default class extends SvelteComponent<SvelteHTMLElements["svg"]> {}
		}

		declare module "~icons/*" {
			import { SvelteComponent } from "svelte";
			import type { SvelteHTMLElements } from "svelte/elements";
			export default class extends SvelteComponent<SvelteHTMLElements["svg"]> {}
		}
	}
}

export {};
