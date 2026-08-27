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
</script>

<div
  role="menuitem"
  tabindex="0"
  class="border rounded-lg p-2 px-6 ml-6 text-base bg-black relative my-10 group"
>
  <span
    class="w-4 h-4 absolute -left-2 top-4.5 border-2 rounded-full block z-10 {current
      ? 'animate-pulse-faster border-green-300   bg-green-400'
      : 'border-white bg-black'}"
  ></span>
  <span class="w-4 h-4 absolute -left-2 top-4.5 rounded-full block z-5 bg-black"
  ></span>

  <h3>{name}</h3>
  <div class="text-sm flex gap-4 flex-wrap">
    <a
      href={locationUrl ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
      class="text-sm text-blue-500 flex gap-1 items-center hover-underline w-fit"
      target="_blank"
    >
      <MdiMapMarker aria-label="Location: " />
      {location}
      <MaterialSymbolsOpenInNew aria-label="(open link in new tab)" />
    </a>
    <span class="text-amber-500">{position}</span>
    <span class="text-gray-400 flex items-center gap-1"
      ><LucideClock3 aria-label="Time Frame: " />{startDate.toLocaleDateString(
        undefined,
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        },
      )} - {endDate
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
