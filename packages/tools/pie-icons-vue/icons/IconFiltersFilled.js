import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFiltersFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--filtersFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 3.844v1.312H6.031v1.532H4.72V5.155H1V3.844h3.719V2.313H6.03v1.53H15Zm-3.719 5.469H9.97v1.53H1v1.313h8.969v1.531h1.312v-1.53H15v-1.313h-3.719V9.313Z',
            },
        })]);
    },
};
