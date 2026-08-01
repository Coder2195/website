<script lang="ts">
  import type { Snippet } from "svelte";

  let { question, children }: { question: string; children: Snippet } =
    $props();
</script>

<div
  class="w-full h-[calc(100dvh-13rem)] flex gap-2 flex-col p-2 overflow-y-scroll relative"
>
  <h2 class="sticky top-0 trace-2 trace-black trace-outside">{question}</h2>
  <div class="pb-10 h-full">
    {@render children()}
  </div>
</div>
