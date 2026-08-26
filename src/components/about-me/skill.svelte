<script lang="ts">
  import type { GetSkillsSkill } from "@/lib/graphql";

  let { skill, index }: { skill: GetSkillsSkill; index: number } = $props();

  let alignRight = $state(true);

  function determineAlignment(
    e: FocusEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) {
    const rect = e.currentTarget.getBoundingClientRect();
    alignRight = rect.right > innerWidth / 2;
  }

  let rootFocused = $state(false);
  let rootHovered = $state(false);
  let showTooltip = $derived(rootFocused || rootHovered);
</script>

<div
  class="skill-{skill.type} px-2 p-1 rounded-lg border-1 relative group cursor-pointer"
  role="button"
  tabindex="0"
  onfocusin={() => (rootFocused = true)}
  onfocusout={() => (rootFocused = false)}
  onpointerenter={(e) => {
    rootHovered = true;
    determineAlignment(e);
  }}
  onpointerleave={() => (rootHovered = false)}
  onfocus={determineAlignment}
>
  {skill.name}
  <div
    style="z-index:{40 - index}"
    class="absolute {alignRight
      ? 'right-0'
      : 'left-0'}  max-w-[35dvw] {showTooltip
      ? 'scale-100 py-2 border-1'
      : 'scale-0 py-0'} w-max overflow-hidden transition-all top-[calc(100%+0.5rem)] duration-300 skill-{skill.type} px-2 rounded-lg bg-black/90 border-0"
  >
    <div class="capitalize text-sm">{skill.type}</div>
    {#if skill.projects.length > 0}
      <div>
        <b class="text-lg">As seen in:</b>

        <div class="flex gap-2 flex-wrap text-base">
          {#each skill.projects as project}
            <a
              class="hover-underline"
              href="/projects/{project.slug}"
              tabindex="0">{project.name}</a
            >
          {/each}
        </div>
      </div>
    {:else}
      <div class="text-sm">No major projects for this skill.</div>
    {/if}
  </div>
</div>
