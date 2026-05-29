<script lang="ts">
  let menuOpen = $state(false);
</script>

<nav>
  <div
    class="border border-white/20 backdrop-blur-md w-16 h-16 p-2 rounded-full"
  >
    <a href="/">
      <img src="icon.png" alt="Home" class="w-full h-full rounded-full" /></a
    >
  </div>
  <div
    class="border border-white/20 backdrop-blur-md h-16 p-2 rounded-full flex items-center max-w-full"
  >
    <button
      type="button"
      onclick={() => {
        menuOpen = !menuOpen;
      }}
      class="w-full h-full aspect-square rounded-full relative overflow-hidden"
      aria-label="{menuOpen ? 'Close' : 'Open'} Menu"
    >
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-200 {menuOpen
          ? 'rotate-45'
          : 'rotate-0 top-1/3'}"
      ></span>
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all top-1/2 duration-200 {menuOpen
          ? '-left-1/2'
          : 'left-1/2'}"
      ></span>
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-200 {menuOpen
          ? '-rotate-45'
          : 'rotate-0 top-2/3'}"
      ></span>
    </button>

    <div class="bg-white/20 backdrop-blur-md max-h-"></div>
  </div>
</nav>
