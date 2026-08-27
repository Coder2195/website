<script lang="ts">
  import WorkExperience from "@/components/experience/work-experience.svelte";
  import { progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);

  let experienceDiv: HTMLDivElement | undefined = $state();
  let experienceOffsetTop = $derived(experienceDiv?.offsetTop ?? 0);

  let { data }: PageProps = $props();
  const { workExperiences } = $derived(data);
</script>

<svelte:window bind:scrollY />

<h1
  id="title"
  style="margin-bottom: calc(-6rem + 40dvh); font-size:{5 -
    1.5 * progress(scrollY, 0, experienceOffsetTop * 0.75)}rem"
>
  Experience
</h1>

<div class="relative pt-32 mb-10" bind:this={experienceDiv}>
  {#each workExperiences as { name, location, position, locationUrl, description, startDate, endDate }}
    <WorkExperience
      description={description?.html}
      {name}
      {location}
      locationUrl={locationUrl || undefined}
      {position}
      {startDate}
      endDate={endDate || undefined}
    />
  {/each}
</div>
