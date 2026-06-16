<script lang="ts">
  import Navbar from "@/components/ui/navbar.svelte";
  import "./layout.css";
  import { fade } from "svelte/transition";
  import { deepMerge, MetaTags } from "svelte-meta-tags";
  import Background from "@/components/ui/background.svelte";
  import Splash from "@/components/ui/splash.svelte";
  import { page } from "$app/state";

  let { children, data } = $props();

  let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

<Navbar />
<Splash />

{#key page.url.pathname}
  <main in:fade={{ duration: 500 }}>
    {@render children()}
  </main>
{/key}
<Background />
