<script>
  import arrowIcon from '../../images/icon-arrow.svg'
  import illustrationProductive from '../../images/illustration-stay-productive.png'
</script>

<div class="mx-6 mt-40 flex flex-col items-center justify-center md:mx-[17.1rem] md:flex-row">
  <img src={illustrationProductive} alt="illustration-productive" class="mx-8 md:mx-0" />
  <div class="mx-2 mt-12 flex flex-col justify-center md:mx-12 md:ml-12 md:mt-0">
    <p class="mx-0 mb-4 font-headings text-xl font-bold text-white md:mr-20 md:text-4xl">
      Stay productive, wherever you are
    </p>
    <p class="mb-4 font-body text-[0.9rem] text-white md:text-base">
      Never let location be an issue when accessing your files. Fylo has you covered for all your
      file storage needs.
    </p>
    <p class="mb-4 font-body text-[0.9rem] text-white md:-mr-8 md:text-base">
      Securely share files and folders with friends, family and colleagues for live collaboration.
      No email attachments required.
    </p>
    <button
      class="group flex w-[10.4rem] flex-col text-cyan-gradient hover:fill-white hover:text-white"
      aria-label="link"
    >
      <span class="flex flex-row">
        <p class="font-body">See how Fylo works</p>
        <img src={arrowIcon} alt="arrow-icon" class="ml-1 mt-1 h-4 w-4" />
      </span>
      <span class="w-40 border border-cyan-gradient group-hover:border-white" />
    </button>
  </div>
</div>
