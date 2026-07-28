<script lang="ts">
  import Biography from "@/components/about-me/biography.svelte";
  import Section from "@/components/about-me/section.svelte";
  import Skills from "@/components/about-me/skills.svelte";
  import { clamp, progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);
  let title: HTMLHeadingElement | undefined = $state();
  let titleHeight = $derived(title?.clientHeight ?? 0);

  let heightTracker: HTMLDivElement | undefined = $state();
  let contentHeight = $derived(heightTracker?.clientHeight ?? 0);
  let contentOffsetTop = $derived(heightTracker?.offsetTop ?? 0);
  let contentOpacity = $derived(
    progress(scrollY, titleHeight, contentOffsetTop),
  );
  const PAGES = 5;
  let pageNum = $derived(
    clamp(
      Math.floor(
        progress(scrollY, contentOffsetTop, contentOffsetTop + contentHeight) *
          5,
      ),
      0,
      PAGES - 1,
    ),
  );

  const { data }: PageProps = $props();
  const skills = $derived(data.skills);
</script>

<svelte:window bind:scrollY />

<div class="">
  <h1
    bind:this={title}
    id="title"
    style="font-size:{5 - 1.5 * progress(scrollY, 0, titleHeight * 2)}rem"
  >
    About Me
  </h1>
  <div
    class="sticky top-48 h-[calc(100dvh-13rem)] border rounded-xl flex flex-col overflow-hidden backdrop-blur-xs {contentOpacity <
    1
      ? 'pointer-events-none'
      : ''}"
    style="opacity: {contentOpacity}"
  >
    <div
      class="transition-all duration-300 flex"
      style="transform: translateX({(-pageNum / PAGES) * 100}%); width: {PAGES *
        100}%;"
    >
      <Biography />
      <Skills {skills} />

      <Section question="I'm queer!">
        <p>
          These days, as attacks ramp up on queer people, it is important to let
          people know that I am just as human as anyone else.
        </p>
        <p>
          I'm a trans woman, and do not appreciate being misgendered and using
          male pronouns or my deadname on me. Please use she/her pronouns and
          address me by my preferred name.
        </p>
      </Section>

      <Section question="My stance on AI">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          suscipit veritatis omnis aliquam hic sit iusto impedit, vitae
          dignissimos fugit nostrum voluptate consequuntur quibusdam id
          asperiores autem sapiente aspernatur fuga.
        </p>
      </Section>

      <Section question="What are my future plans?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          dignissimos aliquam blanditiis optio? Suscipit quas laborum molestias
          iste blanditiis dolor delectus odit vitae alias pariatur? Excepturi
          dicta omnis libero incidunt.
        </p>
      </Section>
    </div>
  </div>
  <div style="height: {PAGES * 200}dvh;" bind:this={heightTracker}></div>
</div>
