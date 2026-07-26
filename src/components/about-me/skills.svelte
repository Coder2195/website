<script lang="ts">
  import type { GetSkillsQuery } from "@/lib/graphql/generated";
  import Section from "./section.svelte";

  let { skills }: GetSkillsQuery = $props();
</script>

<Section question="What skills do I have?">
  <p>Here is an assortment of skills I have learned over the ages.</p>
  {#each skills as skill}
    <p>
      {skill.name}
      {skill.type}
      {#each skill.projects as project}
        Project
      {/each}
    </p>
  {/each}
</Section>
