import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEyeOnFilled',
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
            class: 'c-pieIcon c-pieIcon--eyeOnFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.017 4.789a5.337 5.337 0 0 0-8.033 0L1.062 8l2.922 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.922-3.212Zm-2.32 4.909a2.398 2.398 0 1 1 0-3.395 2.38 2.38 0 0 1 0 3.395Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 6.906a1.059 1.059 0 0 0-.77.324 1.085 1.085 0 1 0 1.54 0A1.059 1.059 0 0 0 8 6.906Z',
            },
        })]);
    },
};
