<script>
  import accessIcon from '../../images/icon-access-anywhere.svg'

  const points = [
    {
      head: 'Access your files, anywhere',
      body: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
      head: 'Security you can trust',
      body: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
      head: 'Real-time collaboration',
      body: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
      head: 'Store any type of file',
      body: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ]
</script>

<div
  class="grid grid-flow-row grid-cols-1 grid-rows-1 gap-20 space-y-4 pt-40 md:grid-cols-2 md:grid-rows-2 md:space-y-0 md:px-96"
>
  {#each points as point}
    <div class="z-10 flex flex-col items-center justify-center">
      <div class="h-24">
        <img src={accessIcon} alt="collaboration-icon" />
      </div>
      <p class="mt-4 font-headings text-xl font-bold text-white">{point.head}</p>
      <p class="mt-2 px-6 text-center font-body text-white md:px-0">
        {point.body}
      </p>
    </div>
  {/each}
</div>
