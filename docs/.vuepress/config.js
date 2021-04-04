module.exports = {
    theme: 'default-prefers-color-scheme',
    dest: 'public',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['meta', {
            name: 'author',
            content: 'Harry Yep'
        }],
        ['meta', {
            name: 'keywords',
            content: 'iUoB, University of Birmingham, UoB, 伯明翰大学'
        }],
        ['link', {
            rel: 'icon',
            href: '/favicon-16x16.png',
            type: 'image/png',
            sizes: '16x16'
        }],
        ['link', {
            rel: 'icon',
            href: '/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#42b983'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }]
    ],
    locales: {
        '/': {
            lang: 'en-GB',
            title: 'Help Center - iUoB',
            description: 'Light up your way to the University of Birmingham',
        }
    },
    plugins: [
        ['@vuepress/google-analytics', {
            'ga': 'UA-182989275-4'
        }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require("moment");
                moment.locale(lang);
                return moment(timestamp).format("YYYY-MM-DD HH:mm");
            }
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/nprogress', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['pangu', true],
        ['sitemap', {
            hostname: 'https://en.help.iuob.uk'
        }],
        ['auto-sidebar', true],
        ['fulltext-search', true]
    ],
    themeConfig: {
        repo: 'iUoB/en.help.iuob.uk',
        editLinks: true,
        docsDir: 'docs',
        logo: '/iUoB_Logo_RB.png',
        displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebar: 'auto',
        smoothScroll: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'British English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                repo: 'iUoB/en.help.iuob.uk',
                repoLabel: 'View source code',
                editLinks: true,
                editLinkText: 'Edit this page on GitHub',
                nav: [{
                        text: 'UoB Website',
                        link: 'https://www.birmingham.ac.uk/'
                    },
                    {
                        text: 'Home',
                        link: '/'
                    },
                    {
                        text: 'Help',
                        link: '/details/'
                    },
                    {
                        text: 'Questions',
                        ariaLabel: 'Questions Select Menu',
                        items: [{
                                text: 'Pre-Admissions',
                                items: [{
                                        text: 'Check Details',
                                        link: '/details/pre-admissions/'
                                    },
                                    {
                                        text: 'Admissions',
                                        link: '/details/pre-admissions/admissions/'
                                    },
                                    {
                                        text: 'Contacts',
                                        link: '/details/pre-admissions/contacts/'
                                    },
                                    {
                                        text: 'Others',
                                        link: '/details/pre-admissions/others/'
                                    }
                                ]
                            },
                            {
                                text: 'Enrolled',
                                items: [{
                                        text: 'Check Details',
                                        link: '/details/enrolled/'
                                    },
                                    {
                                        text: 'Solutions',
                                        link: '/details/enrolled/solutions/'
                                    },
                                    {
                                        text: 'Others',
                                        link: '/details/enrolled/others/'
                                    }
                                ]
                            },
                            {
                                text: 'Others',
                                items: [{
                                        text: 'Check Details',
                                        link: '/details/others/'
                                    },
                                    {
                                        text: 'Unorganized Questions',
                                        link: '/details/others/unorganized/'
                                    },
                                ]
                            },
                            {
                                text: 'iUoB',
                                items: [{
                                        text: 'Dwonload iUoB',
                                        link: '/details/iUoB/download/'
                                    },
                                    {
                                        text: 'Sumbit Questions',
                                        link: '/details/iUoB/submit/'
                                    },
                                    {
                                        text: 'Recent Updates',
                                        link: '/details/iUoB/updates/'
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        text: 'Contact Us',
                        link: '/contacts/'
                    },
                    {
                        text: 'About iUoB',
                        link: '/about/'
                    },
                    {
                        text: 'Others',
                        ariaLabel: 'Others Menu',
                        items: [{
                                text: 'Homepage - iUoB',
                                link: 'https://www.iuob.uk/'
                            },
                            {
                                text: 'Status - iUoB',
                                link: 'https://status.iuob.uk/'
                            }
                        ]
                    },
                    {
                        text: 'Languages',
                        ariaLabel: 'Languages Menu',
                        items: [{
                                text: 'Simplified Chinese',
                                link: 'https://help.iuob.uk/'
                            },
                            {
                                text: 'British English',
                                link: '/'
                            }
                        ]
                    }
                ],
                sidebar: 'auto'
            },
        }
    }
}
