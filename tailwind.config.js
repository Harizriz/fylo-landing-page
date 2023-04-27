/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px'
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      colors: {
        'dark-blue-intro-email': 'hsl(217, 28%, 15%)',
        'dark-blue-main': 'hsl(218, 28%, 13%)',
        'dark-blue-footer': 'hsl(216, 53%, 9%)',
        'dark-blue-testimonials': 'hsl(219, 30%, 18%)',
        'cyan-gradient': 'hsl(176, 68%, 64%)',
        'blue-gradient': 'hsl(198, 60%, 50%)',
        'light-red': 'hsl(0, 100%, 63%)'
      },
      fontFamily: {
        headings: ['Raleway'],
        body: ['"Open Sans"']
      }
    }
  },
  plugins: []
}
