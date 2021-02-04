module.exports = {
    purge: [
        './site/**/*.njk',
        './site/**/*.html',
        './assets/scripts/**/*.js',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'mono': ['JetBrains Mono', 'monospace'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
