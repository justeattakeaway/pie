import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortAscendingLarge',
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
            class: 'c-pieIcon c-pieIcon--sortAscendingLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.03 10.75H2V9h16.765l-.735 1.75zM2 23h10.867l.735-1.75H2V23zm0-6.125h13.449l.735-1.75H2v1.75zm25.891 3.141l-4.016 4.078V12.5h-1.75v11.524l-4.016-4.008-1.234 1.234 4.926 4.935a1.75 1.75 0 002.398 0l4.926-4.935-1.234-1.234z',
                fill: '#242E30',
            },
        })]);
    },
};
