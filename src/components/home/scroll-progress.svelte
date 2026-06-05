<script lang="ts">
  let { progress }: { progress: number } = $props();

  const radius = 1;
</script>

<svg
  width="3em"
  height="3em"
  viewBox="0 0 3em 3em"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  style="transform:rotate(-90deg)"
>
  <title>Scroll Progress</title>

  <circle
    r="{radius}em"
    cx="1.5em"
    cy="1.5em"
    stroke="#ffffff22"
    stroke-width="0.3em"
    stroke-linecap="round"
    fill="transparent"
  ></circle>
  <circle
    r="{radius}em"
    cx="1.5em"
    cy="1.5em"
    stroke="#ffffff"
    stroke-width="0.3em"
    stroke-linecap="round"
    stroke-dashoffset="{2 * Math.PI * radius * (1 - progress)}em"
    fill="transparent"
    stroke-dasharray="{2 * Math.PI * radius}em"
  ></circle>
</svg>
