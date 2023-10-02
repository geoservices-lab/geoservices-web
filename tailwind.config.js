/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./modules/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            mobile: {
                max: '768px' }, //425px
            tablet: { max: '640px', min: '426px' },
            mobileLaptop: {
                max: '1024px',
                min: '0px',
            },
            mobileTablet: {
                max: '640px',
                min: '0px',
            },
            tabletLaptop: {
                max: '1024px',
                min: '640px',
            },
            laptopS: {
                min: '1024px',
                max: '1280px',
            },
            laptop: {
                min: '1024px',
            },
            desktop: {
                min:'769px',
                max: '1931px',
                //min:'1280px'
            },
            desktop4k: {
                min: '1931px',
            },
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
            alpha: 'lower-alpha',
        },
        fontSize: {
            10: '0.625rem',
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            24: '1.5rem',
            26: '1.625rem',
            28: '1.75rem',
            30: '1.875rem',
            32: '2rem',
            36: '2.25rem',
            40: '2.5rem',
            48: '3rem',

            'title-xl': [
                '2.5rem',
                {
                    lineHeight: '3rem',
                    fontWeight: '700',
                },
            ],
            'title-lg': [
                '2rem',
                {
                    lineHeight: '2.375rem',
                    fontWeight: '700',
                },
            ],
            'title-md-lg': [
                '1.75rem',
                {
                    lineHeight: '2rem',
                    fontWeight: '700',
                },
            ],
            'title-md': [
                '1.5rem',
                {
                    lineHeight: '1.75rem',
                    fontWeight: '700',
                },
            ],
            'title-sm': [
                '1.25rem',
                {
                    lineHeight: '2rem',
                    fontWeight: '700',
                },
            ],
            'title-xs': [
                '1rem',
                {
                    lineHeight: '1.5rem',
                    fontWeight: '700',
                },
            ],

            'body-bold': [
                '0.875rem',
                {
                    lineHeight: '1.25rem',
                    fontWeight: '700',
                },
            ],

            tag: [
                '0.75rem',
                {
                    lineHeight: '1.25rem',
                    fontWeight: '700',
                },
            ],
        },
        extend: {
            backgroundImage: {
                'gradient-1': "url('/assets/images/bg/gradient-1.webp')",
                'gradient-2': "url('/assets/images/bg/gradient-2.webp')",
                'gradient-3': "url('/assets/images/bg/gradient-3.webp')",
                'gradient-purple-web':
                    'radial-gradient(83.05% 307.77% at 100% 0%, rgba(122, 59, 188, 0.4) 0%, rgba(75, 20, 131, 0.8) 100%)',
                'gradient-purple-mobile':
                    'radial-gradient(77.62% 70.68% at 100% 100%, rgba(122, 59, 188, 0.4) 0%, rgba(75, 20, 131, 0.8) 100%)',
            },
            boxShadow: {
                hero: '0px 16px 48px rgba(228, 187, 228, 0.32);',
            },
            colors: {
                blue: '#505AE5',
                peach: '#E68E67',
                lightBlue: '#CCE7FF',
                primary: '#363C9a',
                secondary: '#C565AD',
                'dark-primary': '#29045D',
                'light-primary': '#A88ECF',
                'light-secondary': '#E2B2D6',
                'xlight-primary': '#D38CC2',
                'xlight-secondary': '#F0D9EB',
                darkGray: '#323540',
                gray: '#828282',
                link: '#0B59EF',
                'link-secondary': '#B63F99',
                disabled: '#838899',
                footer: 'rgb(252, 235, 255)',
                'thin-line': '#C0A5E552',
                'thin-secondary': 'rgba(255, 251, 255, 0.64)',
                'solid-purple': '#301754',
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
                raleway: 'var(--font-raleway)',
            },
            padding: {
                side: '56px',
                'side-desktop': '72px',
                'side-mobile': '22px',
            },
            margin: {
                side: '56px',
                'side-desktop': '72px',
                'side-mobile': '22px',
            },
            transitionProperty: {
                ...defaultTheme.transitionProperty,
                width: 'width',
                height: 'height',
            },
            transitionDuration: {
                0: '0ms',
                2000: '2000ms',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
};
