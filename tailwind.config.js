module.exports = {
    purge: [
        './src/**/*.js',
        './src/**/*.tsx',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '3rem',
                xl: '4rem',
            },
        },
        extend: {
            colors: {
                primary: '#de7261',

            },
            height: {
                '1/4': '25vh',
                '1/3': '33vh',
                '1/2': '50vh',
                '3/4': '75vh',
                'in': 'inherit',
            },

            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
            }
        },
    },
}