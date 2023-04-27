<script>
  import EmailIcon from '../../images/icon-email.svg'
  import LocationIcon from '../../images/icon-location.svg'
  import PhoneIcon from '../../images/icon-phone.svg'
  import logo from '../../images/logo.svg'
</script>

<div class="z-0 flex flex-col bg-dark-blue-footer px-8 md:px-0">
  <img src={logo} alt="logo" class="w-48 pt-56 md:mt-40 md:w-96 md:pl-40 md:pt-0" />
  <div
    class="grid grid-flow-row flex-row space-y-14 bg-dark-blue-footer pb-20 pt-12 md:grid-flow-col md:flex-col md:space-x-10 md:space-y-0 md:px-40"
  >
    <div class="flex flex-row">
      <img src={LocationIcon} alt="location-icon" class="h-5 pr-8" />
      <p class="w-64 font-body text-white md:w-[21rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at diam a nunc tempus dictum
        eu vel nisl. Phasellus ac lacus diam.
      </p>
    </div>
    <div class="flex flex-col space-y-4">
      <div class="flex flex-row">
        <img src={PhoneIcon} alt="phone-icon" class="h-5" />
        <p class="ml-6 font-body text-white">+1-543-123-4567</p>
      </div>
      <div class="flex flex-row">
        <img src={EmailIcon} alt="email-icon" class="h-5" />
        <p class="ml-6 font-body text-white">example@fylo.com</p>
      </div>
    </div>
    <div class="flex flex-col items-start space-y-4 md:pl-2">
      <button class="font-body text-white hover:font-bold">About Us</button>
      <button class="font-body text-white hover:font-bold">Jobs</button>
      <button class="font-body text-white hover:font-bold">Press</button>
      <button class="font-body text-white hover:font-bold">Blog</button>
    </div>
    <div class="flex flex-col items-start space-y-4">
      <button class="font-body text-white hover:font-bold">Contact Us</button>
      <button class="font-body text-white hover:font-bold">Terms</button>
      <button class="font-body text-white hover:font-bold">Privacy</button>
    </div>
    <div class="flex flex-row justify-center space-x-4 md:justify-normal">
      <button
        class="group h-10 w-10 rounded-full border-[1px] border-white hover:border-cyan-gradient"
      >
        <i class="fa-brands fa-facebook-f group-hover:!text-cyan-gradient" style="color:#ffffff" />
      </button>
      <button
        class="group h-10 w-10 rounded-full border-[1px] border-white hover:border-cyan-gradient"
      >
        <i class="fa-brands fa-twitter group-hover:!text-cyan-gradient" style="color: #ffffff" />
      </button>
      <button
        class="group h-10 w-10 rounded-full border-[1px] border-white hover:border-cyan-gradient"
      >
        <i class="fa-brands fa-instagram group-hover:!text-cyan-gradient" style="color: #ffffff" />
      </button>
    </div>
  </div>
</div>
