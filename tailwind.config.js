module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "sm": { min: "0px", max: "767px" },
        "md": { min: "768px", max: "1023px" },
        "lg": { min: "1024px", max: "1279px" },
        "xl": "1280px",
        "2xl": "1536px",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        BGcolor1: '#2C3531',
        BGcolor2: '#116466',
        BGcolor3: '#D9B08C',
        BGcolor4: '#FFCB9A',
        BGcolor5: '#D1E8E2',
        BGcolor6: '#0f0706',
        BGcolor7: '#11080c',
        BGcolor8: '#102324',

      }),

      spacing: {
        "97": "26rem",
        "98" : "55rem",
        "45%" : "45%",
        "90%" : "90%",
        "93%" : "93%",
        "28%" : "28%",
        "30%" : "30%",
        "70" : "17.5rem",
      },

      margin: {
        '18': '4.5rem',
       },

      fontSize: {
        "7.5xl": ["5.5rem", { lineHeight: "1" }],
        "7.2xl": ["5.3rem", { lineHeight: "1" }],
        "2.5xl": ["1.7rem", { lineHeight: "1" }],
      },

      lineHeight: {
         'tight2': '1.1',
      },

      boxShadow: {
        bs: '0 12px 4px 0 rgba(175, 183, 197)',
        bs2: '0 8px 2px -2px rgba(0, 0, 0, .5)',
      }


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
