<script lang="ts">
  import type { GetSkillsQuery } from "@/lib/graphql/generated";
  import Section from "./section.svelte";
  import Skill from "./skill.svelte";

  let { skills }: GetSkillsQuery = $props();
</script>

<Section question="What skills do I have?">
  <p class="my-2">
    Here is an assortment of skills I have learned over the ages.
  </p>
  <div class="flex flex-wrap gap-2">
    {#each skills as skill, index}
      <Skill {skill} {index} />
    {/each}
  </div>
</Section>
