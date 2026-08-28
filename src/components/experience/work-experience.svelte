<script lang="ts">
  import LucideClock3 from "~icons/lucide/clock-3";
  import MaterialSymbolsOpenInNew from "~icons/material-symbols/open-in-new";
  import MdiMapMarker from "~icons/mdi/map-marker";

  let {
    name,
    position,
    startDate: startDateString,
    endDate: endDateString,
    location,
    locationUrl,
    description,
  }: {
    name: string;
    position: string;
    location: string;
    startDate: string;
    endDate?: string;
    locationUrl?: string;
    description?: string;
  } = $props();

  const startDate = $derived(new Date(startDateString));
  const endDate = $derived(endDateString && new Date(endDateString));

  const current = $derived(!endDate || endDate > new Date());

  let show = $state(false);
  let element: HTMLDivElement;
  $effect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            console.log(entry.intersectionRatio);
            show = true;
          }
        }
      },
      {
        threshold: 0.9,
      },
    );
    intersectionObserver.observe(element);
  });
</script>

<div
  bind:this={element}
  role="menuitem"
  tabindex="0"
  class="border rounded-lg p-2 px-6 text-base bg-black relative my-10 group {show
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-0'} duration-500 transition-all ease-in-out hover:scale-105 cursor-pointer"
>
  <span
    class="w-4 h-4 absolute -left-2 top-4.5 border-2 rounded-full block z-10 {current
      ? 'animate-pulse-faster border-green-300   bg-green-400'
      : 'border-white bg-black'}"
  ></span>
  <span class="w-4 h-4 absolute -left-2 top-4.5 rounded-full block z-5 bg-black"
  ></span>

  <h3>{name}</h3>
  <div class="text-sm flex gap-x-4 flex-wrap mt-4">
    <a
      href={locationUrl ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
      class="text-sm text-blue-500 items-center hover-underline w-fit"
      target="_blank"
    >
      <MdiMapMarker aria-label="Location: " class="inline align-text-top" />
      {location}
      <MaterialSymbolsOpenInNew
        aria-label="(open link in new tab)"
        class="inline align-text-top"
      />
    </a>
    <span class="text-amber-500">{position}</span>
    <span class="text-gray-400"
      ><LucideClock3 aria-label="Time Frame: " class="inline align-text-top" />
      {startDate.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })} - {endDate && endDate < new Date()
        ? endDate.toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : "Current"}</span
    >
  </div>
  {#if description}
    <div class="mt-4">
      {@html description}
    </div>
  {/if}
</div>
