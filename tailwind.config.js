/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "var(--dark-grey)",
        "blue": "var(--blue)",
        "grey": "var(--grey)",
        "ash1": "var(--ash1)",
        "ash2": "var(--ash2)",
        "orange": "var(--orange)",
        "orange-80": "var(--orange-80)",
        "orange-60": "var(--orange-60)",
        "orange-40": "var(--orange-40)",
        "orange-20": "var(--orange-20)",
        "navy-blue": "var(--navy-blue)",
        "navy-blue-80": "var(--navy-blue-80)",
        "navy-blue-60": "var(--navy-blue-60)",
        "navy-blue-40": "var(--navy-blue-40)",
        "navy-blue-20": "var(--navy-blue-20)",
        "navy-blue-10": "var(--navy-blue-10)",
        "white": "var(--white)"
      }
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}
