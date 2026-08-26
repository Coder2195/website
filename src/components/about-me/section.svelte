<script lang="ts">
  import type { Snippet } from "svelte";
  import ScrollProgress from "../ui/scroll-progress.svelte";

  let {
    question,
    children,
    progress,
  }: { question: string; children: Snippet; progress: number } = $props();

  let scrollY: number = $state(0);
</script>

<svelte:window bind:scrollY />

<div
  class="w-full h-[calc(100dvh-13rem)] flex gap-2 flex-col p-4 overflow-y-scroll relative"
>
  <h2 class="sticky top-0 trace-2 trace-black trace-outside flex gap-4">
    <span class="flex-1">{question}</span>
    <span class="text-sm bg-black rounded-full">
      <ScrollProgress {progress} />
    </span>
  </h2>
  <div class="pb-10 h-full">
    {@render children()}
  </div>
</div>
