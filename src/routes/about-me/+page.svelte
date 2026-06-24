<script lang="ts">
  import Section from "@/components/about-me/section.svelte";
  import { clamp, progress } from "@/lib/math";

  let scrollY: number = $state(0);
  let title: HTMLHeadingElement | undefined = $state();
  let titleHeight = $derived(title?.clientHeight ?? 0);

  let heightTracker: HTMLDivElement | undefined = $state();
  let contentHeight = $derived(heightTracker?.clientHeight ?? 0);
  let contentOffsetTop = $derived(heightTracker?.offsetTop ?? 0);
  let contentOpacity = $derived(
    progress(scrollY, titleHeight, contentOffsetTop),
  );
  let scrollingUp = $derived(false);
  // const QUESTIONS = [
  //   "Biography",
  //   "What skills do I have?",
  //   "I'm queer!",
  //   "My stance on AI",
  //   "What are my future plans?",
  // ];
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
    class="sticky top-48 h-[calc(100dvh-12rem)] border rounded-xl flex flex-col overflow-hidden"
    style="opacity: {contentOpacity}"
  >
    <div
      class="transition-all duration-300 flex"
      style="transform: translateX({(-pageNum / PAGES) * 100}%); width: {PAGES *
        100}%;"
    >
      <Section question="Biography">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          dolorem consequuntur nesciunt suscipit quae et, saepe, corrupti
          blanditiis, recusandae ducimus odio? Aut voluptatibus eligendi magnam,
          cumque atque laborum numquam!
        </p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi
          doloremque? Consequuntur aperiam et explicabo. Corrupti consequatur,
          itaque, soluta dolores sint sunt eligendi cum excepturi voluptates
          culpa sequi labore doloremque.
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
