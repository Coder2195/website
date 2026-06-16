<script lang="ts">
  import { optimize } from "@/lib/image";
  import { progress } from "@/lib/math";
  import MaterialSymbolsOpenInNew from "~icons/material-symbols/open-in-new";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();

  let descriptionDiv: HTMLDivElement | undefined = $state();
  let contentOffsetTop = $derived(descriptionDiv?.offsetTop ?? 0);

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

<div class="min-h-[calc(100dvh-15rem)]">
  <div class="flex gap-4 flex-col md:flex-row" bind:this={descriptionDiv}>
    <div class="md:w-3/4 max-h-dvh flex flex-col gap-2">
      <h2>Description</h2>
      <div
        class="p-2 border my-2 rounded-xl backdrop-blur-md overflow-auto"
        id="description"
      >
        {@html project.description.html}
      </div>
    </div>
    <div class="p-2 md:flex-1 max-h-dvh flex flex-col gap-2">
      <h2>Skills</h2>
      <div class="flex flex-wrap gap-2 overflow-auto items-start justify-start">
        {#each project.skills as skill}
          <button
            type="button"
            onclick={() => {
              if (skill.link) open(skill.link);
            }}
            class="border px-2 rounded-md p-1 backdrop-blur-md inline-block text-sm skill-{skill.type} hover:brightness-125 transition-all duration-300 {skill.link
              ? 'cursor-pointer'
              : ''}"
            id="skill"
          >
            {skill.name}
            {#if skill.link}
              <MaterialSymbolsOpenInNew class="inline-block ml-1" />
            {/if}
          </button>
        {/each}
      </div>
    </div>
  </div>

  {#if project.embed}
    <div class="my-4">
      <h2 class="mb-2">Demo</h2>
      <iframe
        src={project.embed}
        title="{project.title} Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        class="w-full aspect-video rounded-lg border"
        frameborder="0"
      ></iframe>
    </div>
  {/if}
</div>
<div
  class="h-dvh w-dvw fixed left-0 top-0 -z-50 bg-black"
  style="opacity:{showGridProgress};"
>
  <img
    srcset={project.coverImage &&
      optimize(project.coverImage.url, [480, 720, 1080, 1280])}
    alt=""
    class="absolute left-0 right-0 w-full h-full object-cover block"
    style="opacity:{coverOpacity};"
  />
</div>
