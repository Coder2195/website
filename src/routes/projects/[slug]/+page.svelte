<script lang="ts">
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();

  let contentDiv: HTMLDivElement | undefined = $state();
  let contentOffsetTop = $derived(contentDiv?.offsetTop ?? 0);

  let coverOpacity = $derived(
    0.5 - 0.5 * progress(scrollY, 0, contentOffsetTop * 0.6),
  );
  let showGridProgress = $derived(
    1 - progress(scrollY, contentOffsetTop * 0.4, contentOffsetTop * 0.7),
  );

  let { data }: PageProps = $props();
  const { project } = $derived(data);
</script>

<svelte:window bind:scrollY />

<div class="h-[150dvh] relative">
  <h1
    bind:this={title}
    id="title"
    style="font-size:{5 -
      1.5 * progress(scrollY, 0, contentOffsetTop * 0.75)}rem"
  >
    {project.title}
  </h1>
</div>

<div bind:this={contentDiv} class="block h-screen">
  {@html project.description.html}
</div>

<div
  class="h-dvh w-dvw fixed left-0 top-0 -z-50 bg-black"
  style="opacity:{showGridProgress};"
>
  <img
    src={project.coverImage?.url}
    alt=""
    class="absolute left-0 right-0 w-full h-full object-cover block"
    style="opacity:{coverOpacity};"
  />
</div>
