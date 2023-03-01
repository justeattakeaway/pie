import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--checkCircleFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.985 4.815l-5.04 5.425a1.181 1.181 0 01-1.352.282 1.216 1.216 0 01-.398-.282L4.99 7.781l.98-.875 2.117 2.38 5.163-5.591a6.737 6.737 0 10.752 1.12h-.017z',
                fill: '#242E30',
            },
        })]);
    },
};
