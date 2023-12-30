import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': "#141414",
        'primary': "#505050",
        'secondry': '#7F8C8D'
      },
    },
  },
  plugins: [],
}
export default config
