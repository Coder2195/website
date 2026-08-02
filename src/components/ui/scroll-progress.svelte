<script lang="ts">
  let { progress }: { progress: number } = $props();

  const radius = 10;
</script>

<svg
  width="3em"
  height="3em"
  viewBox="0 0 30 30"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  style="transform:rotate(-90deg)"
>
  <title>Scroll Progress</title>

  <circle
    r={radius}
    cx="15"
    cy="15"
    stroke="#ffffff22"
    stroke-width="3"
    stroke-linecap="round"
    fill="transparent"
  ></circle>
  <circle
    r={radius}
    cx="15"
    cy="15"
    stroke="#ffffff"
    stroke-width="3"
    stroke-linecap="round"
    stroke-dashoffset={2 * Math.PI * radius * (1 - progress)}
    fill="transparent"
    stroke-dasharray={2 * Math.PI * radius}
  ></circle>
</svg>
