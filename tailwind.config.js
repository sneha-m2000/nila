/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                /* Core surfaces */
                bg: '#F7F6F2', // App background
                card: '#D8CFC4', // Cards / sections

                /* Text */
                'text-main': '#2B2B2B', // Main text
                'text-secondary': '#8A8D8F', // Secondary text

                /* Brand / Actions */
                primary: '#2F3E5C', // Buttons / links
                'primary-hover': '#24324A', // Darker indigo hover
                'primary-focus': '#1F6F78', // Teal focus (optional)
                'green-hover': '#EAF5DC', // lime green hover
            },
        },
    },
    plugins: [],
};
