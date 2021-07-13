const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      'sm':   {'min': '440px'},
      '-sm':  {'max': '439px'},
      'md':   {'min': '768px'},
      '-md':  {'max': '767px'},
      'lg':   {'min': '1024px'},
      '-lg':  {'max': '1023px'},
      'xl':   {'min': '1280px'},
      '-xl':  {'max': '1279px'},
      '2xl':  {'min': '1536px'},
      '-2xl': {'max': '1535px'},
    },
    fontFamily: {
      'sans': ['Gilmer', 'sans-serif'],
    },
    fontSize: {
      'base': ['1rem', {       // 16
        letterSpacing: '0',
        lineHeight: '1.5',
      }],
      'sml': ['0.875rem', {    // 14
        letterSpacing: '0',
        lineHeight: '1.1',
      }],
      'h0': '4.5rem',       // 72
      'h0-sml': '2.5rem',   // 40
      'h0-lrg': '5.75rem',  // 92
      'h1': '3.625rem',     // 58
      'h1-sml': '2rem',     // 32
      'h2': '3rem',         // 48
      'h2-sml': '1.625rem', // 26
      'h3': '2.25rem',      // 36
      'h3-sml': '1.313rem', // 21
      'h4': '1.75rem',      // 28
      'h4-sml': '1.125rem', // 18
      'h5': '1.375rem',     // 22
      'h5-sml': '1.125rem', // 18
      'h6': '1.125rem',     // 18
      'h6-sml': '1.125rem', // 18
    },
    extend: {
      colors: {
        // monotone
        'white': '#fff',
        'black': '#05111C',
        'grey': {
          'light':   '#F6F6F6',
          'default': '#D3D3D3',
          'dark':    '#565656',
        },
        'none':  'transparent',
      },
      minHeight: {
        '1/4-screen': '25vh',
        '1/3-screen': '33vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        'text': '65ch',
        '1/4': '25%',
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            lineHeight: '1.5',
            color: theme('colors.dark'),
            a: {
              color: theme('colors.grey'),
              transition: 'color 0.2s ease-out',
              '&:hover': {
                color: theme('colors.dark'),
                textDecoration: 'underline',
              },
            },
            blockquote: {
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            'ul > li::before': {
              backgroundColor: theme('colors.grey'),
            }
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    /**
     * Add base typography
     */
    plugin(function({ addBase, theme }) {
      addBase({
        'body': {
          color: theme('colors.dark'),
          background: theme('colors.grey.light'),
        },
        'h0, .h0': { 
          fontSize: theme('fontSize.h0-sml'),
          letterSpacing: '0',
          lineHeight: '1',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h0'),
          },
          '@screen xl': {
            fontSize: theme('fontSize.h0-lrg'),
          }
        },
        'h1, .h1': { 
          fontSize: theme('fontSize.h1-sml'),
          lineHeight: '1.0',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h1'),
          }
        },
        'h2, .h2': { 
          fontSize: theme('fontSize.h2-sml'),
          lineHeight: '1.0',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h2'),
          }
        },
        'h3, .h3': { 
          fontSize: theme('fontSize.h3-sml'),
          lineHeight: '1.0',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h3'),
          }
        },
        'h4, .h4': { 
          fontSize: theme('fontSize.h4-sml'),
          lineHeight: '1.2',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h4'),
            lineHeight: '1.1',
          }
        },
        'h5, .h5': { 
          fontSize: theme('fontSize.h5-sml'),
          lineHeight: '1.2',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h5'),
            lineHeight: '1.2',
          }
        },
        'h6, .h6': { 
          fontSize: theme('fontSize.h6-sml'),
          lineHeight: '1.2',
          fontWeight: 'bold',
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.h6'),
          }
        },
        'p': { 
          marginBottom: '1.25rem',
        },
      })
    }),
  ],
  purge: ['./src/**/*.{js,md,njk,svg}'],
}
