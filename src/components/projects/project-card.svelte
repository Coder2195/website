<script lang="ts">
  import type { ProjectPreview } from "@/lib/graphql";
  import { optimize } from "@/lib/image";
  import Fa6SolidThumbtack from "~icons/fa6-solid/thumbtack";

  let {
    project,
    index,
  }: {
    index: number;
    project: ProjectPreview;
  } = $props();

  let show = $state(false);
  let element: HTMLAnchorElement;
  $effect(() => {
    let timeout: NodeJS.Timeout;
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0) {
            console.log(entry.intersectionRatio);
            show = true;
          }
        }
      },
      {
        threshold: 0.9,
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
    <figure class="aspect-video relative overflow-hidden">
      <img
        srcset={optimize(project.coverImage.url)}
        alt={project.title}
        width={480}
        height={270}
        class="object-cover object-center w-full h-full"
      />
    </figure>
  {/if}
  <div class="p-2">
    <h4 class="card-title tracking-tight flex items-center gap-2">
      {#if project.featured}
        <Fa6SolidThumbtack class="inline w-4 h-4" />
      {/if}
      {project.title}
    </h4>
    <div class="flex items-center gap-2">
      {#each project.tags as tag}
        <span class="px-1 py-0.5 rounded border text-xs border-white/20">
          {tag.name}
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
