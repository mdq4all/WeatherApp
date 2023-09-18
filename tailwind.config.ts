import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/back-desktop.jpg')",
        'desktop-cloud': "url('/back-desktop-cloudy.jpg')",
        'desktop-rain': "url('/back-desktop-rain.jpg')",
        'desktop-fog': "url('/back-fog-desktop.jpg')",
        'desktop-snow': "url('/back-desktop-snow.jpg')",
        'mobile': "url('/back-mobile.png')",
        'mobile-cloud': "url('/back-mobile-cloudy.jpg')",
        'mobile-rain': "url('/back-mobile-rain.jpg')",
        'mobile-fog': "url('/back-fog-mobile.jpg')",
        'mobile-snow': "url('/back-mobile-snow.jpg')",
      }
    },
  },
  plugins: [],
}
export default config
