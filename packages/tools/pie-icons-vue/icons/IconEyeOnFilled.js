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
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--eyeOnFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.017 4.789a5.337 5.337 0 00-8.033 0L1.062 8l2.922 3.211a5.337 5.337 0 008.032 0l2.923-3.21-2.922-3.212zm-2.32 4.909a2.398 2.398 0 110-3.395 2.38 2.38 0 010 3.395z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8 6.906a1.059 1.059 0 00-.77.324 1.085 1.085 0 101.54 0A1.059 1.059 0 008 6.906z',
                fill: '#242E30'
            }
        })]);
    }
};
