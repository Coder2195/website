<script lang="ts">
  import Section from "./section.svelte";

  let { progress }: { progress: number } = $props();

  const HRT_DATE = new Date("2026-7-7");
  const daysSince = Math.floor(
    (Date.now() - HRT_DATE.getTime()) / (1000 * 60 * 60 * 24),
  );
</script>

<Section question="I'm queer!" {progress}>
  <p>
    These days, as attacks ramp up on queer people, it is important to let
    people know that I am just as human as anyone else.
  </p>
  <p>
    I'm a trans woman, and do not appreciate being misgendered and using male
    pronouns or my deadname on me. Please use she/her pronouns and address me by
    my preferred name.
  </p>
  <div class="border p-2 rounded-lg mx-auto mt-4 font-bold">
    On HRT since <span class=" text-red-500"
      >{HRT_DATE.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })} ({daysSince} days)</span
    >
  </div>

  <div class="flex justify-center md:flex-row flex-col items-stretch">
    <img
      src="/pictures/trans-paint.svg"
      class="md:w-1/2 max-h-64"
      alt="Transgender pride flag"
    />
    <img
      src="/pictures/lesbian-paint.svg"
      class="md:w-1/2 max-h-64"
      alt="Lesbian pride flag"
    />
  </div>
</Section>
