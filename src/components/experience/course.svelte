<script lang="ts">
  let {
    name,
    courseCode,
  }: {
    name: string;
    courseCode?: string | null;
  } = $props();
</script>

<div
  class="rounded-lg border p-2 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer"
>
  <div class="font-bold text-base leading-none">{name}</div>
  <div class="text-sm">
    {courseCode}
  </div>
</div>
