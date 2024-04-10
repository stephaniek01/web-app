/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                themeColor: "#2C6975"
            }
        },
    },
    plugins: [],
}


/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            backgroundImage: {},
            height: {
                '900': '90vh',
                '1100': '110vh'
            },
            colors: {
                'themeColor': "#2C6975",
                'theme-light': '#E3E9F6',
                'page-light': '#F4F6FA',
                'blue': '#392B85',
                'blue-light': '#B3C5EA',
                'secondary': '#656566',
                'light-purple': '#E5E1FC',
                'share': '#B74343',
            }
        },
    },
    plugins: [],
});

