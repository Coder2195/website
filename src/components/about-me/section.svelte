<script lang="ts">
  import type { Snippet } from "svelte";

  let { question, children }: { question: string; children: Snippet } =
    $props();
</script>

<div class="w-full h-full flex gap-2 flex-col p-2">
  <h2>{question}</h2>
  <div class="flex-1 overflow-y-auto">
    {@render children()}
  </div>
</div>
