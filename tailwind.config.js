/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // or 'media' or 'class'
    theme: {
        screens: {
            s: '370px',
            ss: '410px',
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'gray-nike': '#f6f6f6',
            'light-black': '#111111',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            Helvetical: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '10px': '10px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '84px': '84px',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
}