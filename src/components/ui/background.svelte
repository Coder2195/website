<script lang="ts">
</script>

<svelte:window
  onmousemove={(e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  }}
  ontouchmove={(e) => {
    document.documentElement.style.setProperty(
      "--pointer-x",
      `${e.touches[0].clientX}px`,
    );
    document.documentElement.style.setProperty(
      "--pointer-y",
      `${e.touches[0].clientY}px`,
    );
  }}
/>

<div id="background"></div>
<div id="background-mask"></div>
