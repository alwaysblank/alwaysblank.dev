const colors = require('tailwindcss/colors');

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
        colors: {
            teal: colors.teal,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
