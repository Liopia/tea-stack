module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  purge: ['./src/**/*.{js,md,njk,svg}'],
}
