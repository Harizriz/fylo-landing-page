<script>
  import quotesIcon from '../../images/bg-quotes.png'
  import profile1 from '../../images/profile-1.jpg'
  import profile2 from '../../images/profile-2.jpg'
  import profile3 from '../../images/profile-3.jpg'

  const points = [
    {
      picture: profile1,
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      company: 'Founder & CEO, Huddle'
    },
    {
      picture: profile2,
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Bruce McKenzie',
      company: 'Founder & CEO, Huddle'
    },
    {
      picture: profile3,
      text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Iva Boyd',
      company: 'Founder & CEO, Huddle'
    }
  ]
</script>

<div
  class="relative grid grid-flow-col grid-cols-1 grid-rows-3 gap-10 px-8 pb-80 pt-40 md:mx-auto md:w-[80%] md:grid-flow-row md:grid-cols-3 md:grid-rows-1 md:pb-96 md:pt-60"
>
  <img src={quotesIcon} alt="quotes-icon" class="absolute left-6 top-32 z-0 md:left-6 md:top-52" />
  {#each points as point}
    <div class="z-0 flex flex-col rounded-sm bg-dark-blue-testimonials p-6 shadow-lg md:p-8">
      <p class="font-body text-[12px] text-white md:text-base">
        {point.text}
      </p>
      <div class="mt-4 flex flex-row items-center md:mt-6">
        <img src={point.picture} alt="profile1" class="h-8 w-8 rounded-full" />
        <div class="ml-2 flex flex-col">
          <p class="font-body text-[12px] font-bold text-white md:text-base">{point.name}</p>
          <p class="font-body text-[10px] text-white md:mt-1 md:text-xs">{point.company}</p>
          <p />
        </div>
      </div>
    </div>
  {/each}
</div>
