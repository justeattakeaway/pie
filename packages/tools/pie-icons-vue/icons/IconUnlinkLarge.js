import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUnlinkLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--unlinkLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_18_765)',
            },
        }, [h('path', {
            attrs: {
                d: 'M12.377 21.25h-3.5A5.198 5.198 0 0 1 3.75 16a5.311 5.311 0 0 1 1.505-3.719 5.093 5.093 0 0 1 3.631-1.531h3.5L13.375 9H8.886a6.842 6.842 0 0 0-4.882 2.056A7.061 7.061 0 0 0 2 16a7 7 0 0 0 6.886 7h4.489l-.998-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.684 18.441 17.234 16l2.45-2.441-1.243-1.243L16 14.766l-2.441-2.45-1.243 1.243L14.766 16l-2.45 2.441 1.243 1.243L16 17.234l2.441 2.45 1.243-1.243Z',
            },
        }), h('path', {
            attrs: {
                d: 'M23.114 9h-4.008l.954 1.75h3.054A5.198 5.198 0 0 1 28.25 16a5.311 5.311 0 0 1-1.505 3.719 5.093 5.093 0 0 1-3.631 1.531H20.06L19.106 23h4.008a6.844 6.844 0 0 0 4.882-2.056A7.061 7.061 0 0 0 30 16a7 7 0 0 0-6.886-7Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_765',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
