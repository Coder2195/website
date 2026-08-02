<script lang="ts">
  import Section from "./section.svelte";

  let { progress }: { progress: number } = $props();
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

  <div class="flex justify-center md:flex-row flex-col items-stretch">
    <img
      src="/pictures/trans-paint.svg"
      class="md:w-1/2 max-h-80"
      alt="Transgender pride flag"
    />
    <img
      src="/pictures/lesbian-paint.svg"
      class="md:w-1/2 max-h-80"
      alt="Lesbian pride flag"
    />
  </div>
</Section>
