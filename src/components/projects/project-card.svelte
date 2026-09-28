<script lang="ts">
  import type { GetProjectsTag, ProjectPreview } from "@/lib/graphql";
  import { optimize } from "@/lib/image";
  import Fa6SolidThumbtack from "~icons/fa6-solid/thumbtack";

  let {
    project,
    tags,
    progressPoint,
    progressDistance,
    scrollProgress,
  }: {
    project: ProjectPreview;
    tags: { [id: string]: GetProjectsTag };
    progressPoint: number;
    progressDistance: number;
    scrollProgress: number;
  } = $props();

  const displacementFactor = $derived(
    // its in the future
    scrollProgress <= progressPoint - progressDistance / 2
      ? (progressPoint - progressDistance / 2 - scrollProgress) /
          progressDistance
      : scrollProgress > progressPoint + progressDistance / 2
        ? (progressPoint + progressDistance / 2 - scrollProgress) /
          progressDistance
        : 0,
  );
  const position = $derived(displacementFactor * 30 + 50);
  const isCurrent = $derived(displacementFactor === 0);
  const scale = $derived(
    isCurrent ? 1 : Math.max(0.8 - Math.abs(displacementFactor) * 0.2, 0.3),
  );

  const zIndex = $derived(Math.round(-Math.abs(displacementFactor) * 999));
</script>

<div
  class="absolute bottom-0 md:w-3/5 w-5/6 sm:w-4/5 h-full max-w-4xl"
  style="transform: translate(-50%, 0) scale({scale}); z-index: {zIndex}; left: {position}%; "
>
  <a
    class="button rounded-lg p-0 hover:animate-wiggle flex flex-col overflow-hidden max-h-full after:backdrop-hack after:backdrop-blur-md"
    style="filter: opacity({scale * 1.8 - 0.6}) blur({Math.abs(
      displacementFactor,
    ) **
      1.5 *
      2}px);"
    href="/projects/{project.slug}"
  >
    {#if project.coverImage}
      <div class="flex-1 aspect-video relative overflow-hidden">
        <img
          srcset={optimize(project.coverImage.url, [240, 480, 720])}
          alt={project.name}
          width={480}
          height={270}
          class="object-cover object-center w-full h-full"
        />
      </div>
    {/if}
    <div class="p-2">
      <h4 class="card-title tracking-tight flex items-center gap-2">
        {#if project.featured}
          <Fa6SolidThumbtack aria-label="Featured" class="inline w-4 h-4" />
        {/if}
        {project.name}
      </h4>
      <div class="flex items-center gap-2 flex-wrap">
        {#each project.tags.map((tag) => tag.id) as tagId}
          <span
            class="px-1 py-0.5 rounded border text-xs border-white/20 tag-{tagId}"
          >
            {tags[tagId].name}
          </span>
        {/each}
      </div>
      <div class="text-sm text-right text-zinc-400">
        {new Date(project.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  </a>
</div>
