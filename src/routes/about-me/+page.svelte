<script lang="ts">
  import Section from "@/components/about-me/section.svelte";
  import { optimize } from "@/lib/image";
  import { clamp, progress } from "@/lib/math";
  import FeBirthdayCake from "~icons/fe/birthday-cake";
  import LucideGraduationCap from "~icons/lucide/graduation-cap";
  import MaterialSymbolsGlobeAsia from "~icons/material-symbols/globe-asia";
  import MaterialSymbolsLocationOnOutline from "~icons/material-symbols/location-on-outline";
  import MaterialSymbolsWomanSharp from "~icons/material-symbols/woman-sharp";

  let scrollY: number = $state(0);
  let title: HTMLHeadingElement | undefined = $state();
  let titleHeight = $derived(title?.clientHeight ?? 0);

  let heightTracker: HTMLDivElement | undefined = $state();
  let contentHeight = $derived(heightTracker?.clientHeight ?? 0);
  let contentOffsetTop = $derived(heightTracker?.offsetTop ?? 0);
  let contentOpacity = $derived(
    progress(scrollY, titleHeight, contentOffsetTop),
  );
  const PAGES = 5;
  let pageNum = $derived(
    clamp(
      Math.floor(
        progress(scrollY, contentOffsetTop, contentOffsetTop + contentHeight) *
          5,
      ),
      0,
      PAGES - 1,
    ),
  );

  const biographyTags = [
    {
      icon: MaterialSymbolsLocationOnOutline,
      text: "Brooklyn, NY",
      style: "border-color: #34d399; color: #34d399;",
    },
    {
      icon: LucideGraduationCap,
      text: `RIT Class of 2029, <a class="hover-underline" href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="blank">Web & Mobile Computing B.S.</a>`,
      style: "border-color: #60a5fa; color: #60a5fa;",
    },

    {
      icon: LucideGraduationCap,
      text: `BTHS Class of 2025, <a class="hover-underline" href="https://www.bths.edu/apps/pages/index.jsp?uREC_ID=231673&type=d" target="blank">Software Engineering major</a>`,
      style: "border-color: #60a5fa; color: #60a5fa;",
    },
    {
      icon: FeBirthdayCake,
      text: `${new Date().getFullYear() - 2007 + (new Date().getMonth() < 8 && new Date().getDate() < 27 ? -1 : 0)} years old`,
      style: "border-color: #fbbf24; color: #fbbf24;",
    },
    {
      icon: MaterialSymbolsWomanSharp,
      text: `Trans Woman (she/her)`,
      style: "border-color: #ec4899; color: #ec4899;",
    },
    {
      icon: MaterialSymbolsGlobeAsia,
      text: "Chinese-American (born in the USA)",
      style: "border-color: #cd071e; color: #cd071e;",
    },
  ];
</script>

<svelte:window bind:scrollY />

<div class="">
  <h1
    bind:this={title}
    id="title"
    style="font-size:{5 - 1.5 * progress(scrollY, 0, titleHeight * 2)}rem"
  >
    About Me
  </h1>

  <div
    class="sticky top-48 h-[calc(100dvh-13rem)] border rounded-xl flex flex-col overflow-hidden backdrop-blur-xs"
    style="opacity: {contentOpacity}"
  >
    <div
      class="transition-all duration-300 flex"
      style="transform: translateX({(-pageNum / PAGES) * 100}%); width: {PAGES *
        100}%;"
    >
      <Section question="Biography">
        <div class="flex flex-col sm:flex-row justify-between gap-4">
          <div class="sm:w-1/3">
            <img
              alt="Selfie"
              srcset={optimize("/pictures/selfie.png")}
              class="rounded-full p-4"
            />
          </div>
          <div class="flex-1">
            <h3>Amber Li</h3>
            <div class="flex my-4 gap-2 flex-wrap">
              {#each biographyTags as tag}
                <div
                  class="flex items-center gap-1 p-1 border rounded-lg w-fit text-sm hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                  style={tag.style}
                >
                  <tag.icon />
                  {@html tag.text}
                </div>
              {/each}
            </div>
            <p class="mb-2">
              I'm Amber, I've been coding since 3rd grade (if you count block
              coding), or 7th grade (if you only count text-based coding).
            </p>

            <p class="mb-2">
              Outside of my passion for coding, I like exploring and checking
              out random places in New York City.
            </p>

            <p class="mb-2">
              I have a passion for fighting for justice in many aspects of
              society, employing both my technical and non-technical skills to
              help make the world a better place, whether it means making a
              website for volunteering or contributing at a food pantry.
            </p>

            <p></p>
          </div>
        </div>
      </Section>

      <Section question="What skills do I have?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          perspiciatis tempore rem repellendus facere, commodi maxime reiciendis
          dolorem fuga, minima quisquam nesciunt, nulla excepturi eaque eum vero
          officiis! Cupiditate, est!
        </p>
      </Section>

      <Section question="I'm queer!">
        <p>
          These days, as attacks ramp up on queer people, it is important to let
          people know that I am just as human as anyone else.
        </p>
        <p>
          I'm a trans woman, and do not appreciate being misgendered and using
          male pronouns or my deadname on me. Please use she/her pronouns and
          address me by my preferred name.
        </p>
      </Section>

      <Section question="My stance on AI">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          suscipit veritatis omnis aliquam hic sit iusto impedit, vitae
          dignissimos fugit nostrum voluptate consequuntur quibusdam id
          asperiores autem sapiente aspernatur fuga.
        </p>
      </Section>

      <Section question="What are my future plans?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          dignissimos aliquam blanditiis optio? Suscipit quas laborum molestias
          iste blanditiis dolor delectus odit vitae alias pariatur? Excepturi
          dicta omnis libero incidunt.
        </p>
      </Section>
    </div>
  </div>
  <div style="height: {PAGES * 200}dvh;" bind:this={heightTracker}></div>
</div>
