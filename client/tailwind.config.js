/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#dc944c",
        
"secondary": "#263f40",
        
"accent": "#11596f",
        
"neutral": "#120c12",
        
"base-100": "#211720",
        
"info": "#8ccac1",
        
"success": "#9cb686",
        
"warning": "#ffd261",
        
"error": "#fc9783",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}