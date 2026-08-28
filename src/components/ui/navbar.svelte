<script lang="ts">
  let menuOpen = $state(false);
  let menuFocus = $state(false);
  let menu: HTMLElement | undefined = $state();

  import MaterialSymbolsCardsStackOutlineRounded from "~icons/material-symbols/cards-stack-outline-rounded";
  import MaterialSymbolsFolderCodeOutline from "~icons/material-symbols/folder-code-outline";
  import MaterialSymbolsPerson from "~icons/material-symbols/person";

  const LINKS = [
    {
      name: "About Me",
      href: "/about-me",
      Icon: MaterialSymbolsPerson,
    },
    {
      name: "Projects",
      href: "/projects",
      Icon: MaterialSymbolsFolderCodeOutline,
    },
    {
      name: "Experience",
      href: "/experience",
      Icon: MaterialSymbolsCardsStackOutlineRounded,
    },
  ];

  function checkClose(e: Node) {
    if (menuOpen && menu && !menu.contains(e)) {
      menuOpen = false;
    }
  }

  const isOpen = $derived(menuFocus || menuOpen);
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
    menuFocus = false;
  }}
/>

<nav>
  <div
    class="border border-white/20 backdrop-blur-md w-16 h-16 p-2 rounded-full"
  >
    <a href="/">
      <img src="/icon.png" alt="Home" class="w-full h-full rounded-full" /></a
    >
  </div>
  <div
    bind:this={menu}
    class="rounded-full flex items-center w-16 h-16 relative"
  >
    <button
      type="button"
      onclick={(e) => {
        if (menuOpen) {
          e.currentTarget.blur();
          menuFocus = false;
        }
        menuOpen = !menuOpen;
      }}
      onfocus={() => {
        menuFocus = true;
      }}
      class="aspect-square h-16 button overflow-hidden"
      aria-label="{isOpen ? 'Close' : 'Open'} Menu"
    >
      <span
        class="block w-2/3 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-300 {isOpen
          ? 'rotate-45 top-1/2'
          : 'rotate-0 top-1/3'}"
      ></span>
      <span
        class="block w-2/3 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all top-1/2 duration-300 {isOpen
          ? '-left-1/2'
          : 'left-1/2'}"
      ></span>
      <span
        class="block w-2/3 h-1 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all left-1/2 duration-300 {isOpen
          ? '-rotate-45 top-1/2'
          : 'rotate-0 top-2/3'}"
      ></span>
    </button>

    <div
      class="{isOpen
        ? 'md:w-56 md:h-16 w-16 h-56'
        : 'md:w-0 md:h-16 w-16 h-0'} overflow-hidden absolute md:right-full right-0 top-full md:top-0 transition-all duration-300"
    >
      <div
        class="md:w-56 md:h-16 w-16 h-56 flex md:flex-row flex-col gap-2 items-center justify-center flex-w"
      >
        {#each LINKS as link}
          <a
            href={link.href}
            class="button w-16 h-16 block p-2 transition-[width,height] delay-50 duration-300"
          >
            <link.Icon class="w-full h-full" aria-label={link.name} />
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>
