<script lang="ts">
  import { fade } from "svelte/transition";
  import Section from "./section.svelte";

  let { progress }: { progress: number } = $props();

  let textProgress = $state(-10);

  const RESPONSE = [
    `I'm glad you asked! For me, with the developments of AI, it just appears to be heavily abused in various industries right now, force feeding them up user's throats, and driving layoffs with it. 
    I assume the AI that is controversial refers to generative AI, which came out for about 5 or so years (as of the time of this writing). I find the root of the problem to be inside
    late stage captialism, where this motive to drive out workers and make bigger and bigger profits has actually turned out to be worse off for actual AI profitably as well as the skilled workers. See`,
    `<a href="https://isaiprofitable.com/" class="text-blue-500 hover-underline">isaiprofitable.com</a>`,
    `<br><br>`,
    `I firmly believe that if AI can be used to truly create more productive workers, then they should feel that productivity. Instead of working 5 days a week for 8 hours having this tech
    claimed to be able to make people faster, we should be having 3 day workweeks. Like when factories came around, people just ended up being able to make hundreds of times more product, but somehow were still
    left to slave in there for 12 hours. That increased productivity is being siphoned away and it's certainly not being felt by people who aren't wealthy.`,
    `<br><br>`,
    `Regarding consent... So far in this race for AI, we have blantantly impeded on this basic principle. If people don't want AI, don't shove it on them. Don't make it pop up first thing on google, nor promote
    AI for those clearly not interested. And as far as I'm concerned, all the artists and programmers had their work essentially stolen to train AI, even if it's behind a wall of lobbying and "legal terms" that they know is not
    very well understood.`,
    `<br><br>`,
    `I believe AI should not be used in hobbies in which the fun comes from trial and error (like drawing) or solving problems (like coding). The boomers always say that new generations are lazy, and then we tell them "Oh, 
    guess what? Our generation uses a robot to do their hobby for them". There is a difference from enjoying a hobby and enjoying seeing results. I've met those who claim to code in their free time, claiming they like
    to see results instead of coding to justify their AI use while saying they enjoy coding. People who enjoy coding as a hobby enjoy writing code and debugging mostly by hand. The whole point of having a hobby is to
    use that free time to slowly get good at that hobby, not to speedrun it.`,
    `<br><br>`,
    `So, all in all, there is potential, but with the trend things are going, I'm going to be <b>anti-AI</b> for the sale of the technology having little to no benefits at the moment for most of society right now.`,
  ]
    .flatMap((l) => (l.startsWith("<") ? [l] : l.split(" ")))
    .flatMap((l) => l.replaceAll("\n", " "));

  console.log(RESPONSE);

  $effect(() => {
    const interval = setInterval(() => {
      textProgress += Math.random() * 2 + 0.5;
    }, 200);

    return () => clearInterval(interval);
  });

  const partialResponse = $derived(
    RESPONSE.slice(0, Math.floor(textProgress)).join(" "),
  );
</script>

<Section question="My stance on AI" {progress}>
  <div class="text-right mb-4">
    <div
      in:fade={{ duration: 300, delay: 500 }}
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3"
    >
      Amber, provide an in depth explanation of your stance on AI, and how it
      pertains to your work and viewpoints.
    </div>
  </div>

  {#if textProgress < 0}
    <div class="w-4 h-4 m-4 bg-white rounded-full animate-pulse-faster"></div>
  {:else}
    <div
      class="rounded-2xl p-2 px-4 bg-white/10 inline-block text-sm max-w-2/3 min-h-9"
    >
      {@html partialResponse}

      {#if textProgress < RESPONSE.length}
        <br />
        <button
          type="button"
          class="text-zinc-500 cursor-pointer"
          onclick={() => {
            textProgress = RESPONSE.length;
          }}>(Skip)</button
        >
      {/if}
    </div>
  {/if}

  {#if textProgress >= RESPONSE.length}
    <div class="text-center mt-8 py-4 text-sm text-gray-500">
      You have run out of credits. Please donate at <a
        href="http://ko-fi.com/coder2195"
        target="_blank"
        class="text-blue-500 hover-underline"
        rel="noopener noreferrer">ko-fi.com/coder2195</a
      > to get nothing.
    </div>
  {/if}
</Section>
