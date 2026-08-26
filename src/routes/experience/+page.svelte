<script lang="ts">
  import WorkExperience from "@/components/experience/work-experience.svelte";
  import { progress } from "@/lib/math";

  let scrollY: number = $state(0);

  let title: HTMLHeadingElement | undefined = $state();

  let experienceDiv: HTMLDivElement | undefined = $state();
  let experienceOffsetTop = $derived(experienceDiv?.offsetTop ?? 0);
</script>

<svelte:window bind:scrollY />

<h1
  id="title"
  bind:this={title}
  style="margin-bottom: calc(-6rem + 40dvh); font-size:{5 -
    1.5 * progress(scrollY, 0, experienceOffsetTop * 0.75)}rem"
>
  Experience
</h1>

<div class="relative pt-32 mb-10" bind:this={experienceDiv}>
  <WorkExperience
    name="Summer Game Design Institute"
    location="Fordham High School for the Arts"
    position="Game Developer"
    timeFrame="July 2024"
  >
    Designed games using Godot.
  </WorkExperience>
  <WorkExperience
    name="Pathfinders CS4ALL"
    location="Remote at Cerbrec"
    locationUrl="https://www.cerbrec.com/"
    position="Intern"
    timeFrame="March 2025 - April 2025"
  />
  <WorkExperience
    name="SYEP 2025"
    location="PS 939 in Sunset Park"
    position="Summer Camp Counselor"
    timeFrame="July 2025 - August 2025"
  />
  <WorkExperience
    name="SYEP 2026"
    location="The Table Food Pantry at NYU FHC"
    position="Intern"
    timeFrame="July 2026 - August 2026"
  />
  <WorkExperience
    name="CADTech"
    location="Frank E Gannett Hall at RIT"
    position="CADTech Lab Assistant"
    timeFrame="January 2026 - Present"
    current
  />
</div>
