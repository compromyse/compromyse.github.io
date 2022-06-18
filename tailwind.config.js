module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#131517',
        white: '#EEEEEE',
        graytwo: '#111017',
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
