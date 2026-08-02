<script lang="ts">
  import Ai from "@/components/about-me/ai.svelte";
  import Biography from "@/components/about-me/biography.svelte";
  import Queer from "@/components/about-me/queer.svelte";
  import Section from "@/components/about-me/section.svelte";
  import Skills from "@/components/about-me/skills.svelte";
  import { clamp, progress } from "@/lib/math";
  import type { PageProps } from "./$types";

  let scrollY: number = $state(0);
  let title: HTMLHeadingElement | undefined = $state();
  let titleHeight = $derived(title?.clientHeight ?? 0);

  let heightTracker: HTMLDivElement | undefined = $state();
  let contentHeight = $state(0);
  let contentOffsetTop = $derived(heightTracker?.offsetTop ?? 0);
  let contentOpacity = $derived(
    progress(scrollY, titleHeight, contentOffsetTop),
  );
  const PAGES = 5;
  let pageNum = $derived(
    clamp(
      // idk why but only this works for even distrubition lol
      Math.floor(progress(scrollY, contentOffsetTop, contentHeight) * 5),
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
      <Biography
        progress={progress(
          scrollY,
          contentOffsetTop,
          contentHeight / 5 + (4 * contentOffsetTop) / 5,
        )}
      />
      <Skills
        {skills}
        progress={progress(
          scrollY,
          contentHeight / 5 + (4 * contentOffsetTop) / 5,
          (contentHeight / 5) * 2 + (3 * contentOffsetTop) / 5,
        )}
      />
      <Queer
        progress={progress(
          scrollY,
          (contentHeight / 5) * 2 + (3 * contentOffsetTop) / 5,
          (contentHeight / 5) * 3 + (2 * contentOffsetTop) / 5,
        )}
      />
      {#key pageNum === 3}
        <Ai
          progress={progress(
            scrollY,
            (contentHeight / 5) * 3 + (2 * contentOffsetTop) / 5,
            (contentHeight / 5) * 4 + (1 * contentOffsetTop) / 5,
          )}
        />
      {/key}

      <Section
        question="What are my future plans?"
        progress={progress(
          scrollY,
          (contentHeight / 5) * 4 + (1 * contentOffsetTop) / 5,
          contentHeight,
        )}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          dignissimos aliquam blanditiis optio? Suscipit quas laborum molestias
          iste blanditiis dolor delectus odit vitae alias pariatur? Excepturi
          dicta omnis libero incidunt.
        </p>
      </Section>
    </div>
  </div>
  <div
    style="height: calc({PAGES * 300}dvh);"
    bind:clientHeight={contentHeight}
    bind:this={heightTracker}
  ></div>
</div>
