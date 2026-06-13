<script lang="ts">
  import ProjectCard from "@/components/projects/project-card.svelte";
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();

  let projectsDiv: HTMLDivElement | undefined = $state();
  let projectsOffsetTop = $derived(projectsDiv?.offsetTop ?? 0);

  const { data }: PageProps = $props();
  const { projects } = $derived(data);
</script>

<svelte:window bind:scrollY />

<div class="min-h-[calc(75dvh-8rem)]">
  <h1
    id="title"
    bind:this={title}
    style="font-size:{6 -
      2 * progress(scrollY, 0, projectsOffsetTop * 0.75)}rem"
  >
    Projects
  </h1>
</div>
<div
  bind:this={projectsDiv}
  class="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8"
>
  {#each projects.sort((a, b) => {
    // featured on top, then sort by date
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }) as project, index}
    <ProjectCard {project} {index} />
  {/each}
</div>
