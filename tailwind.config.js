/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Ilisarniq', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'primary-blue': '#28347C',
                'primary-orange': '#FF5505',
                'secondary-rasberry': '#D13B5B',
                'secondary-mouse': '#AFA197',
                'secondary-viride': '#059C8C',
            },
            screens: {
              '3xl': '1920px',
              '4xl': '2560px',
            },
        },
    },
    plugins: [],
};
