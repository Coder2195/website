<script lang="ts">
  import { fade } from "svelte/transition";
  import Section from "./section.svelte";

  let progress = $state(-2);

  $effect(() => {
    const interval = setInterval(() => {
      progress += 0.2;
    }, 200);

    return () => clearInterval(interval);
  });

  const RESPONSE = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;

  let partialResponse = $derived(RESPONSE.substring(0, progress / 0.05));
</script>

<Section question="My stance on AI">
  <div class="text-right mb-4">
    <div
      in:fade={{ duration: 300, delay: 500 }}
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3"
    >
      Amber, provide an in depth explanation of your stance on AI, and how it
      pertains to your work and viewpoints.
    </div>
  </div>

  {#if progress < 0}
    <div class="w-4 h-4 m-4 bg-white rounded-full animate-pulse-faster"></div>
  {:else}
    <div
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3"
    >
      {partialResponse}
    </div>
  {/if}
</Section>
