<script lang="ts">
  import { fade } from "svelte/transition";
  import Section from "./section.svelte";

  let { progress }: { progress: number } = $props();

  let textProgress = $state(-10);

  const RESPONSE =
    `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`
      .replaceAll("\n", " <br /> ")
      .split(" ");

  console.log(RESPONSE);

  $effect(() => {
    const interval = setInterval(() => {
      textProgress += Math.random() * 2 + 0.5;
    }, 200);

    return () => clearInterval(interval);
  });

  const partialResponse = $derived(
    RESPONSE.slice(0, Math.floor(textProgress)).join(" "),
  );
</script>

<Section question="My stance on AI" {progress}>
  <div class="text-right mb-4">
    <div
      in:fade={{ duration: 300, delay: 500 }}
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3"
    >
      Amber, provide an in depth explanation of your stance on AI, and how it
      pertains to your work and viewpoints.
    </div>
  </div>

  {#if textProgress < 0}
    <div class="w-4 h-4 m-4 bg-white rounded-full animate-pulse-faster"></div>
  {:else}
    <div
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3"
    >
      {@html partialResponse}
    </div>
  {/if}

  {#if textProgress >= RESPONSE.length}
    <div class="text-center mt-8 py-4 text-sm text-gray-500">
      You have run out of credits. Please donate at <a
        href="http://ko-fi.com/coder2195"
        target="_blank"
        class="text-blue-500 hover-underline"
        rel="noopener noreferrer">ko-fi.com/coder2195</a
      > to get nothing.
    </div>
  {/if}
</Section>
