<script lang="ts">
  import { optimize } from "@/lib/image";
  import FeBirthdayCake from "~icons/fe/birthday-cake";
  import LucideGraduationCap from "~icons/lucide/graduation-cap";
  import MaterialSymbolsGlobeAsia from "~icons/material-symbols/globe-asia";
  import MaterialSymbolsLocationOnOutline from "~icons/material-symbols/location-on-outline";
  import MaterialSymbolsWomanSharp from "~icons/material-symbols/woman-sharp";
  import Section from "./section.svelte";

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
      <p>
        I'm Amber, I've been coding since 3rd grade (if you count block coding),
        or 7th grade (if you only count text-based coding).
      </p>

      <p>
        Outside of my passion for coding, I like exploring and checking out
        random places in New York City.
      </p>

      <p>
        I have a passion for fighting for justice in many aspects of society,
        employing both my technical and non-technical skills to help make the
        world a better place, whether it means making a website for volunteering
        or contributing at a food pantry.
      </p>
      <p class="text-sm mt-8 text-gray-400">
        PS: My avatar image does not reflect my hair color in person, as that is
        a wig from a picture taken before I started hormone replacement therapy.
        My hair is dark brown.
      </p>
    </div>
  </div>
</Section>

<style>
  p {
    margin-bottom: 0.5rem;
  }
</style>
