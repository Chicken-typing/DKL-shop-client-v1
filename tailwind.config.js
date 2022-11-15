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
            'white': '#FFFFFF',
            'blue': {
                default: '#1fb6ff',
                '100': '#dbeafe',
                '200': '#bfdbfe',
                '300': '#93c5fd',
                '400': '#60a5fa',
                '500': '#3b82f6',
                '600': '#2563eb',
                '700': '#1d4ed8',
                '800': '#1e40af',
                '900': '#1e3a8a',
            },
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': {
                default: '#8492a6',
                '100': '#f3f4f6',
                '200': '#e5e7eb',
                '300': '#d1d5db',
                '400': '#9ca3af',
                '500': '#6b7280',
                '600': '#4b5563',
                '700': '#374151',
                '800': '#1f2937',
                '900': '#111827',
            },
            'gray-light': '#d3dce6',
            'gray-nike': '#f6f6f6',
            'light-black': '#111111',
            'indigo': {
                default: '#eef2ff',
                '100': '#e0e7ff',
                '200': '#c7d2fe',
                '300': '#a5b4fc',
                '400': '#818cf8',
                '500': '#6366f1',
                '600': '#4f46e5',
                '700': '#4338ca',
                '800': '#3730a3',
                '900': '#312e81',
            }
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