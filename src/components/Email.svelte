<script>
  //@ts-nocheck
  import classNames from 'classnames'
  let emailInvalid = false
  let emailErrorMsg = 'Please enter a valid email address'

  function handleSubmit(e) {
    const formData = new FormData(e.target)

    const data = {
      email: ''
    }

    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }

    if (!data.email) {
      emailInvalid = true
    } else {
      emailInvalid = false
    }
  }
</script>

<div
  class="absolute inset-x-8 -bottom-40 z-10 flex w-5/6 flex-col rounded-lg bg-dark-blue-intro-email px-4 py-8 shadow-2xl md:-bottom-28 md:mx-auto md:w-[1000px] md:p-12"
>
  <div class="flex flex-col items-center">
    <p class="font-body text-xl font-bold text-white md:text-3xl">Get early access today</p>
    <p
      class="mt-4 px-2 text-center font-body text-[14px] leading-6 text-white md:mt-8 md:px-20 md:text-base"
    >
      It only takes a minute to sign up and our free starter is extremely generous. If you have any
      questions, our support team would be happy to help you.
    </p>
  </div>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="mx-4 mt-8 flex flex-col justify-center md:mx-10 md:flex-row md:justify-normal">
      <input
        type="email"
        name="email"
        placeholder="email@example.com"
        class="w-full rounded-full bg-white py-3 pl-8"
      />
      <button
        type="submit"
        class="mt-4 w-full rounded-full bg-gradient-to-r from-cyan-gradient to-blue-gradient py-3 text-sm text-white md:ml-8 md:mt-0 md:w-72 md:py-0"
      >
        Get Started For Free
      </button>
    </div>
    <span
      class={classNames('invisible h-0', {
        '!visible ml-10 text-sm text-red-500 md:ml-[4.5rem]': emailInvalid
      })}
    >
      {emailErrorMsg}
    </span>
  </form>
</div>
