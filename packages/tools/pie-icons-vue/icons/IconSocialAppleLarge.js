import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialAppleLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--appleLarge'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_923_536)',
                fill: '#000'
            }
        }, [h('path', {
            attrs: {
                d: 'M25.94 21.679v.07c-.044.114-.105.219-.14.332a14.264 14.264 0 01-3.159 5.145 3.334 3.334 0 01-4.077.569 4.287 4.287 0 00-4.332 0 4.052 4.052 0 01-2.056.464 3.03 3.03 0 01-2.17-1.243A14.963 14.963 0 015.99 16.604a8.041 8.041 0 01.674-3.168c1.365-3.115 5.11-4.707 7.944-3.045a3.072 3.072 0 003.054 0 7.476 7.476 0 011.54-.595 6.58 6.58 0 013.798.385 4.488 4.488 0 012.248 1.917c-.34.306-.682.577-.997.874-.37.31-.697.67-.971 1.068a5.425 5.425 0 00.787 6.335 4.27 4.27 0 001.873 1.304z'
            }
        }), h('path', {
            attrs: {
                d: 'M20.821 3.75a4.655 4.655 0 01-.446 2.564 4.942 4.942 0 01-3.5 3.01c-1.103.236-1.085.245-.963-.875a5.513 5.513 0 014.375-4.638c.177-.03.355-.05.534-.061z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_923_536'
            }
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)'
            }
        })])])]);
    }
};
