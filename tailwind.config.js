module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "192": "192px",
        "75": "75px",
        "129": "129px",
        "350": "350px",
        "96": "96px",
        "186": "186px",
        "1/5": "6%",
        "3/5": "33%",
        "6/5": "60%",
        "260": "260px"

      },
      height: {
        "75": "75px",
        "48": "48px"
      }
    },
    height: {
      footerHeight: "545px"
    },
    backgroundColor: {
      'primary': "#614546",
      'secoundary': "#EDE7E0",
      'coral': "#FFA998",
      "white": "#ffffff"
    },
    colors: {
      coral: "#FFA998",
      gray: "#907D7D",
      primary: "#614546",
    },
    fontSize: {
      "sm": "15px",
      "6xl": "4.375rem",
      "4xl": "2.375rem",
      "48": "48px"
    },
    spacing: {
      146: "146px",
      190: "11.875rem",
      28: "1.625rem",
      37: "37px",
      30: "30px",
      73: "73px",
      20: "5rem",
      22: "5.1rem",
      24: "6rem",
      64: '64px',
      8: "8px",
      106: "106px",
      130: "130px",
      111: "111px",
      25: "25px",
      90: "90px",
      21: "21px",
      136: "136px",
      2: "2px",
      12: "9px",
      7: "7px",
      167: "167px",
      217: "217px",
      200: "200px",
      80: "80px",
      27: "27px",
      40: "40px",
      68: "68px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
