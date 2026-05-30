<script lang="ts">
  let { progress }: { progress: number } = $props();
</script>

<svg
  width="4em"
  height="4em"
  viewBox="0 0 4em 4em"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  style="transform:rotate(-90deg)"
>
  <title>Scroll Progress</title>

  <circle
    r="1.5em"
    cx="2em"
    cy="2em"
    stroke="#ffffff22"
    stroke-width="0.5em"
    stroke-linecap="round"
    fill="transparent"
  ></circle>
  <circle
    r="1.5em"
    cx="2em"
    cy="2em"
    stroke="#ffffff"
    stroke-width="0.5em"
    stroke-linecap="round"
    stroke-dashoffset="{9.424 * (1 - progress)}em"
    fill="transparent"
    stroke-dasharray="9.424em"
  ></circle>
</svg>
