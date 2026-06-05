<script lang="ts">
  import ScrollProgress from "@/components/home/scroll-progress.svelte";
  import { progress } from "@/lib/math";
  import MaterialSymbolsKey from "~icons/material-symbols/key";
  import MdiEmail from "~icons/mdi/email";
  import MdiGithub from "~icons/mdi/github";

  let scrollY: number = $state(0);
  let height: number = $state(0);

  let howEndUp: HTMLDivElement | undefined = $state();
  let howEndUpOffsetTop = $derived(howEndUp?.offsetTop ?? 0);
  let howEndUpHeight = $state(0);
  let howEndUpContentHeight = $state(0);
  // min is offsetTop - clientHeight/2
  let howEndUpMin = $derived(howEndUpOffsetTop - howEndUpHeight / 2);
  // max is offsetTop + clientHeight/2 - howEndUpContent.clientHeight
  let howEndUpMax = $derived(
    howEndUpOffsetTop + howEndUpHeight / 2 - howEndUpContentHeight,
  );
  let howEndUpProgress = $derived(progress(scrollY, howEndUpMin, howEndUpMax));

  let aboutMe: HTMLDivElement | undefined = $state();
  let aboutMeOffsetTop = $derived(aboutMe?.offsetTop ?? 0);
  let aboutMeHeight = $state(0);
  let aboutMeContentHeight = $state(0);
  let aboutMeMin = $derived(aboutMeOffsetTop - aboutMeHeight / 2);
  let aboutMeMax = $derived(
    aboutMeOffsetTop + aboutMeHeight / 2 - aboutMeContentHeight,
  );
  let aboutMeProgress = $derived(progress(scrollY, aboutMeMin, aboutMeMax));

  let projects: HTMLDivElement | undefined = $state();
  let projectsOffsetTop = $derived(projects?.offsetTop ?? 0);
  let projectsHeight = $state(0);
  let projectsContentHeight = $state(0);
  let projectsMin = $derived(projectsOffsetTop - projectsHeight / 2);
  let projectsMax = $derived(
    projectsOffsetTop + projectsHeight / 2 - projectsContentHeight,
  );
  let projectsProgress = $derived(progress(scrollY, projectsMin, projectsMax));

  let experience: HTMLDivElement | undefined = $state();
  let experienceOffsetTop = $derived(experience?.offsetTop ?? 0);
  let experienceHeight = $state(0);
  let experienceContentHeight = $state(0);
  let experienceMin = $derived(experienceOffsetTop - experienceHeight / 2);
  let experienceMax = $derived(
    experienceOffsetTop + experienceHeight / 2 - experienceContentHeight,
  );
  let experienceProgress = $derived(
    progress(scrollY, experienceMin, experienceMax),
  );

  const LINKS = [
    {
      name: "Github",
      href: "https://github.com/coder2195",
      Icon: MdiGithub,
    },
    {
      name: "Email",
      href: "mailto:contact@coder2195.dev",
      Icon: MdiEmail,
    },
    {
      name: "Public Key",
      href: "/amber.asc",
      Icon: MaterialSymbolsKey,
    },
  ];

  const progressEnd = $derived(
    progress(
      scrollY,
      experienceMax,
      experienceMax + (experienceHeight * 5) / 12,
    ),
  );
</script>

<svelte:window
  bind:scrollY
  onresize={() => {
    howEndUpOffsetTop = howEndUp?.offsetTop ?? 0;
    aboutMeOffsetTop = aboutMe?.offsetTop ?? 0;
    projectsOffsetTop = projects?.offsetTop ?? 0;
    experienceOffsetTop = experience?.offsetTop ?? 0;
  }}
/>

<div bind:clientHeight={height}>
  <h1
    id="title"
    style="opacity:{1 - progressEnd}; transform:translateX({-progressEnd *
      100}%); font-size:{6 -
      2 * progress(scrollY, howEndUpMin + howEndUpHeight / 3, howEndUpMax)}rem"
  >
    Amber here.
  </h1>

  <div
    class="h-dvh relative"
    bind:clientHeight={howEndUpHeight}
    bind:this={howEndUp}
  >
    <div class="sticky top-1/2 pb-4" bind:clientHeight={howEndUpContentHeight}>
      <h2>How did you end up here? :3</h2>
      <span class="absolute right-0 -bottom-16"
        ><ScrollProgress progress={howEndUpProgress} /></span
      >
    </div>
  </div>
  <div class="h-[calc(100vh-8rem)]"></div>
  <div
    class="h-dvh relative"
    bind:clientHeight={aboutMeHeight}
    bind:this={aboutMe}
  >
    <div class="sticky top-1/2" bind:clientHeight={aboutMeContentHeight}>
      <h2>A curious queer programmer.</h2>
      <p>Learn more about me -></p>
      <span class="absolute right-0 -bottom-16"
        ><ScrollProgress progress={aboutMeProgress} /></span
      >
    </div>
  </div>
  <div class="h-[calc(100vh-8rem)]"></div>
  <div
    class="h-dvh relative"
    bind:clientHeight={projectsHeight}
    bind:this={projects}
  >
    <div class="sticky top-1/2" bind:clientHeight={projectsContentHeight}>
      <h2>An aspiring software engineer specializing in web development.</h2>
      <a href="projects" class="button mt-2 inline-block">See my work.</a>
      <span class="absolute right-0 -bottom-16"
        ><ScrollProgress progress={projectsProgress} /></span
      >
    </div>
  </div>
  <div class="h-dvh"></div>
  <div
    class="h-dvh relative"
    bind:clientHeight={experienceHeight}
    bind:this={experience}
  >
    <div class="sticky top-1/2" bind:clientHeight={experienceContentHeight}>
      <h2>A girl with 7 years of experience.</h2>
      <p>Check out my work experience -></p>
      <span class="absolute right-0 -bottom-16"
        ><ScrollProgress progress={experienceProgress} /></span
      >
    </div>
  </div>
  <div class="h-dvh"></div>
</div>
<div class="min-h-dvh flex justify-center items-center gap-16 flex-col">
  <h2>Get in touch.</h2>
  <div class="flex gap-4 flex-wrap justify-center">
    {#each LINKS as { name, href, Icon }}
      <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="button flex items-center gap-2"
      >
        <Icon class="w-6 h-6" />
        <span>{name}</span>
      </a>
    {/each}
  </div>
</div>
