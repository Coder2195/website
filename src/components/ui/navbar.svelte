<script lang="ts">
  let menuOpen = $state(false);
  let menu: HTMLElement | undefined = $state();

  import MaterialSymbolsAccountCircle from "~icons/material-symbols/account-circle";
  import MaterialSymbolsCardsStackOutlineRounded from "~icons/material-symbols/cards-stack-outline-rounded";
  import MaterialSymbolsFolderCodeOutline from "~icons/material-symbols/folder-code-outline";

  const LINKS = [
    {
      name: "About Me",
      href: "about-me",
      Icon: MaterialSymbolsAccountCircle,
    },
    {
      name: "Projects",
      href: "projects",
      Icon: MaterialSymbolsFolderCodeOutline,
    },
    {
      name: "Experience",
      href: "experience",
      Icon: MaterialSymbolsCardsStackOutlineRounded,
    },
  ];

  function checkClose(e: Node) {
    if (menuOpen && menu && !menu.contains(e)) {
      menuOpen = false;
    }
  }
</script>

<svelte:window
  onclick={(e) => {
    checkClose(e.target as Node);
  }}
  ontouchstart={(e) => {
    checkClose(e.target as Node);
  }}
  onscroll={() => {
    menuOpen = false;
  }}
/>

<nav>
  <div
    class="border border-white/20 backdrop-blur-md w-16 h-16 p-2 rounded-full"
  >
    <a href="/">
      <img src="icon.png" alt="Home" class="w-full h-full rounded-full" /></a
    >
  </div>
  <div
    bind:this={menu}
    class="rounded-full flex items-center w-16 h-16 relative"
  >
    <button
      type="button"
      onclick={() => {
        menuOpen = !menuOpen;
      }}
      class="aspect-square h-16 button overflow-hidden"
      aria-label="{menuOpen ? 'Close' : 'Open'} Menu"
    >
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-300 {menuOpen
          ? 'rotate-45 top-1/2'
          : 'rotate-0 top-1/3'}"
      ></span>
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all top-1/2 duration-300 {menuOpen
          ? '-left-1/2'
          : 'left-1/2'}"
      ></span>
      <span
        class="block w-3/4 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-300 {menuOpen
          ? '-rotate-45 top-1/2'
          : 'rotate-0 top-2/3'}"
      ></span>
    </button>

    <div
      class="rounded {menuOpen
        ? 'md:w-56 md:h-16 w-16 h-56'
        : 'md:w-0 md:h-16 w-16 h-0'} absolute overflow-clip transition-all duration-500 flex md:flex-row flex-col gap-2 md:right-full right-0 top-full md:top-0 items-center justify-center"
    >
      {#each LINKS as link}
        <a
          href={link.href}
          class="button {menuOpen
            ? 'w-16 h-16'
            : 'w-0 h-0'} block p-2 transition-[width,height] delay-50 duration-300"
          aria-label={link.name}
        >
          <link.Icon class="w-full h-full" />
        </a>
      {/each}
    </div>
  </div>
</nav>
