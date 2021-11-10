module.exports = {
    mode: 'jit',
    darkMode: 'class',
    purge: ['./pages/**/*.{js,mdx}', './components/**/*.js'],
    theme: {
        typography: (theme) => ({}),
        extend: {}
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')]
};
