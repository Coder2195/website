<script lang="ts">
  function move(x: number, y: number) {
    document.documentElement.style.setProperty("--mouse-x", `${x}px`);
    document.documentElement.style.setProperty("--mouse-y", `${y}px`);
  }
</script>

<svelte:window
  onmousemove={(e) => {
    move(e.clientX, e.clientY);
  }}
  ontouchmove={(e) => {
    move(e.touches[0].clientX, e.touches[0].clientY);
  }}
  ondrag={(e) => {
    move(e.clientX, e.clientY);
  }}
  ontouchstart={(e) => {
    move(e.touches[0].clientX, e.touches[0].clientY);
  }}
/>

<div id="background"></div>

<div id="background"></div>
<div id="background-mask"></div>
