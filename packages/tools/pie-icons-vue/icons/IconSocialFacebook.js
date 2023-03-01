import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialFacebook',
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
            class: 'c-pieIcon c-pieIcon--facebook',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1595_1545)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8 1.455A6.545 6.545 0 006.96 14.466V9.89H5.296V8H6.96V6.556A2.31 2.31 0 019.435 4.01c.49.007.978.051 1.461.131v1.61h-.822a.945.945 0 00-1.068 1.024V8h1.812l-.289 1.89H9.006v4.576A6.545 6.545 0 008 1.455z',
                fill: '#1778F2',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1595_1545',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
