<script lang="ts">
  import Course from "@/components/experience/course.svelte";
  import WorkExperience from "@/components/experience/work-experience.svelte";
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let experienceDiv: HTMLDivElement | undefined = $state();
  let experienceOffsetTop = $derived(experienceDiv?.offsetTop ?? 0);

  let { data }: PageProps = $props();
  const { workExperiences, courses } = $derived(data);
</script>

<svelte:window bind:scrollY />

<h1
  id="title"
  style="margin-bottom: calc(-6rem + 40dvh); font-size:{5 -
    1.5 * progress(scrollY, 0, experienceOffsetTop * 0.75)}rem"
>
  Experience
</h1>

<div class="relative mb-10" bind:this={experienceDiv}>
  {#each workExperiences as { description, ...attributes }}
    <WorkExperience description={description?.html} {...attributes} />
  {/each}
</div>

<div class="grid grid-cols-4 gap-4 my-10 items-start">
  {#each courses as course}
    <Course {...course} />
  {/each}
</div>
