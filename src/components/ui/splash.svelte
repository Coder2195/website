<script lang="ts">
  let show = $state(true);
  $effect(() => {
    show = false;
  });
</script>

<div
  class="{show
    ? 'opacity-100 scale-100 pointer-events-auto'
    : 'opacity-0 scale-150 pointer-events-none'} transition-all duration-300 w-dvw h-dvh fixed top-0 left-0 bg-black z-1000 flex items-center justify-center"
>
  <img
    src="/icon.png"
    alt="Logo"
    class="w-24 h-24 animate-pulse rounded-full"
  />
</div>
