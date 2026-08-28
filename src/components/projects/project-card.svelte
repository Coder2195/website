<script lang="ts">
  import type { GetProjectsTag, ProjectPreview } from "@/lib/graphql";
  import { optimize } from "@/lib/image";
  import Fa6SolidThumbtack from "~icons/fa6-solid/thumbtack";

  let {
    project,
    tags,
    index,
  }: {
    index: number;
    project: ProjectPreview;
    tags: { [id: string]: GetProjectsTag };
  } = $props();

  let show = $state(false);
  let element: HTMLAnchorElement;
  $effect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            console.log(entry.intersectionRatio);
            show = true;
          }
        }
      },
      {
        threshold: 0.5,
      },
    );
    intersectionObserver.observe(element);
  });
</script>

<a
  bind:this={element}
  class="button rounded-lg overflow-hidden transition-all h-full p-0 {show
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-0'} duration-500 hover:animate-wiggle"
  href="/projects/{project.slug}"
>
  {#if project.coverImage}
    <div class="aspect-video relative overflow-hidden">
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
