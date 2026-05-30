<script lang="ts">
  import MdiEmail from "virtual:icons/mdi/email";
  import MdiGithub from "virtual:icons/mdi/github";

  let scrollY: number = $state(0);
  let height: number = $state(0);
  const threshold = 0.92;
  let ratio = $derived(
    Math.max(Math.min((0.03 - (scrollY / height - threshold)) * 10, 1), 0),
  );

  const LINKS = [
    {
      name: "Github",
      href: "https://github.com/coder2195",
      Icon: MdiGithub,
    },
    {
      name: "Email",
      href: "mailto:coder2195mail@gmail.com",
      Icon: MdiEmail,
    },
  ];
</script>

<svelte:window bind:scrollY />

<div bind:clientHeight={height} class="relative">
  <h1
    class="text-red-500 font-bold sticky top-24 mt-[calc(50dvh-3em)] mb-8 z-10 p-4 backdrop-blur-md border-white/20 border inline-block max-w-fit rounded-xl"
    style="opacity: {ratio}"
  >
    Amber here.
  </h1>
  <div class="h-dvh relative">
    <div class="sticky top-1/2">
      <h2>How did you end up here? :3</h2>
    </div>
  </div>
  <div class="h-[calc(100vh-8rem)]"></div>
  <div class="h-dvh relative">
    <div class="sticky top-1/2">
      <h2>A curious queer programmer.</h2>
      <p>Learn more about me -></p>
    </div>
  </div>
  <div class="h-[calc(100vh-8rem)]"></div>
  <div class="h-dvh relative">
    <div class="sticky top-1/2">
      <h2>An aspiring software engineer specializing in web development.</h2>
      <p>See my work -></p>
    </div>
  </div>
  <div class="h-dvh"></div>
  <div class="h-dvh relative">
    <div class="sticky top-1/2">
      <h2>A girl with 7 years of experience.</h2>
      <p>Check out my work experience -></p>
    </div>
  </div>
  <div class="h-dvh"></div>
</div>
<div class="min-h-dvh flex justify-center items-center gap-16 flex-col">
  <h2>Get in touch.</h2>
  <div class="flex gap-4">
    {#each LINKS as { name, href, Icon }}
      <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="border border-white/20 backdrop-blur-md p-4 rounded-full flex items-center gap-2"
      >
        <Icon class="w-6 h-6" />
        <span>{name}</span>
      </a>
    {/each}
  </div>
</div>
