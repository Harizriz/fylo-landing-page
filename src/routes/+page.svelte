<script>
  // @ts-nocheck
  import curvyDesktop from '../../images/bg-curvy-desktop.svg'
  import illustrationIntro from '../../images/illustration-intro.png'
  import Demo from '../components/Demo.svelte'
  import Email from '../components/Email.svelte'
  import GridIcon from '../components/GridIcon.svelte'
  import Testimonials from '../components/Testimonials.svelte'
</script>

<svelte:head>
  <title>Fylo</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="relative min-h-screen bg-dark-blue-intro-email md:w-full">
    <div class="flex justify-center">
      <img
        src={illustrationIntro}
        alt="illustration-intro"
        class="z-10 w-80 pt-8 md:w-[720px] md:pt-0"
      />
    </div>
    <div class="flex flex-col justify-center">
      <h1
        class="z-10 px-8 pt-8 text-center font-headings text-2xl font-bold leading-9 text-white md:mx-auto md:w-[800px] md:bg-transparent md:text-[40px] md:leading-[3rem]"
      >
        All your files in one secure location, accessible anywhere.
      </h1>
      <h2
        class="z-10 bg-dark-blue-main px-5 pt-4 text-center font-body text-base text-white md:mx-auto md:w-[650px] md:bg-transparent md:pt-8 md:text-xl"
      >
        Fylo stores all your most information files in one secure location. Access them wherever you
        need, share and collaborate with friends, family, and co-workers.
      </h2>
      <div class="flex justify-center bg-dark-blue-main md:bg-transparent">
        <button
          class="z-10 mx-auto mt-8 w-[17.5rem] items-center rounded-full bg-gradient-to-r from-cyan-gradient to-blue-gradient px-8 py-4 text-white hover:from-cyan-gradient hover:to-cyan-gradient"
        >
          Get Started
        </button>
      </div>
    </div>
    <img
      src={curvyDesktop}
      alt="curvy-desktop"
      class="absolute top-[15rem] z-0 h-44 bg-dark-blue-intro-email md:top-[38rem] md:h-[20%]"
    />
    <div class="bg-dark-blue-main">
      <GridIcon />
      <Demo />
      <Testimonials />
      <Email />
    </div>
  </div>
</section>
