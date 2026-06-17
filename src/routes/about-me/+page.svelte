<script lang="ts">
  import { clamp, progress } from "@/lib/math";

  let scrollY: number = $state(0);
  let title: HTMLHeadingElement | undefined = $state();
  let titleHeight = $derived(title?.clientHeight ?? 0);

  let heightTracker: HTMLDivElement | undefined = $state();
  let contentHeight = $derived(heightTracker?.clientHeight ?? 0);
  let contentOffsetTop = $derived(heightTracker?.offsetTop ?? 0);
  let contentOpacity = $derived(
    progress(scrollY, titleHeight, contentOffsetTop),
  );
  const QUESTIONS = [
    "Biography",
    "What skills do I have?",
    "I'm queer!",
    "My stance on AI",
    "What are my future plans?",
  ];
  const PAGES = QUESTIONS.length;
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
    class="sticky top-48 h-[calc(100dvh-12rem)] border rounded-xl p-2 flex flex-col"
    style="opacity: {contentOpacity}"
  >
    <h2 class="w-full overflow-x-hidden">
      <div
        style="transform: translateX(-{(100 / PAGES) *
          pageNum}%); width: {PAGES * 100}%;"
        class="transition-transform flex h-full justify-start duration-300"
      >
        {#each QUESTIONS as question, i}
          <div class="w-full whitespace-nowrap h-16 p-2 overflow-x-auto">
            {question}
          </div>
        {/each}
      </div>
    </h2>
    <div class="flex-1 overflow-auto"></div>
  </div>
  <div style="height: {PAGES * 200}dvh;" bind:this={heightTracker}></div>
</div>
