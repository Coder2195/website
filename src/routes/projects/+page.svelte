<script lang="ts">
  import ProjectCard from "@/components/projects/project-card.svelte";
  import type { GetProjectsTag } from "@/lib/graphql";
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();
  let scrollDiv: HTMLDivElement | undefined = $state();
  let projectsOffsetTop = $derived(scrollDiv?.offsetTop ?? 0);

  const { data }: PageProps = $props();
  const { projects, projectTags } = $derived(data);
  const tags: { [id: string]: GetProjectsTag } = $derived(
    (() => {
      const map: { [id: string]: GetProjectsTag } = {};
      for (const tag of projectTags) {
        map[tag.id] = tag;
      }
      return map;
    })(),
  );

  $effect(() => {
    let style: HTMLStyleElement = document.createElement("style");
    style.textContent = projectTags
      .map((tag) => `.tag-${tag.id} { ${tag.style} }`)
      .join(" ");
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  });

  const projectsOpacity = $derived(
    progress(
      scrollY,
      (scrollDiv?.offsetTop || 9999) - 750,
      scrollDiv?.offsetTop || 9999,
    ),
  );
</script>

<svelte:window bind:scrollY />

<h1
  id="title"
  bind:this={title}
  style="margin-bottom: calc(-6rem + 40dvh); font-size:{5 -
    1.5 * progress(scrollY, 0, projectsOffsetTop * 0.75)}rem"
>
  Projects
</h1>

<div
  style="opacity:{projectsOpacity};pointer-events:{projectsOpacity < 0.75
    ? 'none'
    : 'auto'}"
  class="h-[calc(100dvh-13rem)] fixed bottom-2 w-dvw px-[3.5dvw] left-0"
>
  {#each projects.sort((a, b) => {
    // featured on top, then sort by date
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }) as project, index}
    <ProjectCard
      {project}
      progressPoint={(index + 0.5) / projects.length}
      progressDistance={1 / projects.length}
      {tags}
      scrollProgress={progress(
        scrollY,
        scrollDiv?.offsetTop || 9999,
        (scrollDiv?.offsetHeight || 9999) - (scrollDiv?.offsetTop || 0) || 9999,
      )}
    />
  {/each}
</div>
<div
  bind:this={scrollDiv}
  style="height: {projects.length}00dvh"
  class="mt-128"
></div>
