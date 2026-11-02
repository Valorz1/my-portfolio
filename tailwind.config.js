/** Tailwind build config. Rebuild the stylesheet with: npm run build:css */
module.exports = {
  content: ['./index.html', './404.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        line: 'var(--line)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        ruby: '#D91B24',
        wine: '#761F21',
        silver: '#C4C4C4'
      },
      transitionTimingFunction: {
        base: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  }
};
