<script lang="ts">
  import Navbar from "@/components/ui/navbar.svelte";
  import "./layout.css";
  import { deepMerge, MetaTags } from "svelte-meta-tags";
  import Background from "@/components/ui/background.svelte";
  import { page } from "$app/state";

  let { children, data } = $props();

  let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<MetaTags {...metaTags} />

<Navbar />

{#key page.url.pathname}
  <main>
    {@render children()}
  </main>
{/key}
<Background />
