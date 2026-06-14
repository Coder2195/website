<script lang="ts">
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();

  let contentDiv: HTMLDivElement | undefined = $state();
  let contentOffsetTop = $derived(contentDiv?.offsetTop ?? 0);

  let { data }: PageProps = $props();
  const { project } = $derived(data);
</script>

<svelte:window bind:scrollY />

<div
  class="h-[75dvh] relative bg-black -z-50 w-screen -ml-4 xl:ml-[calc(100dvw-72rem)] px-4"
>
  <h1
    id="title"
    bind:this={title}
    style="font-size:{5 -
      1.5 * progress(scrollY, 0, contentOffsetTop * 0.75)}rem"
  >
    {project.title}
  </h1>
  <img
    src={project.coverImage?.url}
    alt=""
    class="w-full h-full object-cover absolute top-0 left-0 -z-50 opacity-50"
  />
</div>

<div bind:this={contentDiv} class="block h-screen">
  {@html project.description.html}
</div>
