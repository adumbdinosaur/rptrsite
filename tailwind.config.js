module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00FF00',
        'terminal-background': '#282828',
      },
      fontFamily: {
        terminal: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}