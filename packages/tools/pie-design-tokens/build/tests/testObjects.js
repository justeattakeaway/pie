const TEST_FILE_CONTENTS = 'TEST_CONTENT';

const TEST_GLOBAL_TOKENS = {
    global: {
        color: {
            orange: '#f36805',
            red: '#d50525',
        },
    },
};

const TEST_THEME_TOKENS = {
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                    orange: '#41301f',
                },
            },
        },
    },
};

const TEST_TOKENS = {
    global: {
        color: {
            orange: '#f36805',
        },
    },
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                },
            },
        },
    },
};

const TEST_TOKENS_WITH_THEME_OVERRIDE = {
    global: {
        color: {
            blue: '#c1dade',
            orange: '#f36805',
        },
    },
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                },
            },
        },
    },
};

const TEST_TOKENS_WITH_TWO_THEMES = {
    global: {
        color: {
            orange: '#f36805',
        },
    },
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                },
            },
        },
        newjet: {
            color: {
                global: {
                    blue: '#ebf6fa',
                },
            },
        },
    },
};

const TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE = {
    global: {
        color: {
            blue: '#c1dade',
            orange: '#f36805',
        },
    },
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                },
            },
        },
        newjet: {
            color: {
                global: {
                    blue: '#ebf6fa',
                },
            },
        },
    },
};

const TEST_TOKENS_WITH_HIGH_CONTRAST = {
    global: {
        color: {
            orange: '#f36805',
            'orange-dark-hc': '#a33100',
            white: '#fff',
            black: '#000',
        },
    },
    theme: {
        jet: {
            color: {
                global: {
                    blue: '#125fca',
                },
                alias: {
                    default: {
                        'container-default': 'white',
                        'content-default': 'black',
                    },
                    dark: {
                        'container-default': 'black',
                        'content-default': 'white',
                    },
                    highcontrast: {
                        'container-default': 'white',
                        'content-brand': 'orange-dark-hc',
                    },
                    'highcontrast-dark': {
                        'container-default': 'black',
                        'content-brand': 'orange-dark-hc',
                    },
                },
            },
        },
    },
};

module.exports = {
    TEST_FILE_CONTENTS,
    TEST_GLOBAL_TOKENS,
    TEST_THEME_TOKENS,
    TEST_TOKENS,
    TEST_TOKENS_WITH_THEME_OVERRIDE,
    TEST_TOKENS_WITH_TWO_THEMES,
    TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE,
    TEST_TOKENS_WITH_HIGH_CONTRAST,
};
