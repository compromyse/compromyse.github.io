module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#1f1d29',
        white: '#EEEEEE',
        graytwo: '#2b323b',
        bluetextnavbar: '#6086bf',
        blogheaderbackground: '#2f3238',
        datesearch: '#6a6980',
        bgsearch: '#1f1d29'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
