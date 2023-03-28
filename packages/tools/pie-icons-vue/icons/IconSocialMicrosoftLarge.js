import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialMicrosoftLarge',
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
            class: 'c-pieIcon c-pieIcon--microsoftLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#F15121',
                d: 'M4 4h11v11H4V4Z',
            },
        }), h('path', {
            attrs: {
                fill: '#00A3EE',
                d: 'M4 17h11v11H4V17Z',
            },
        }), h('path', {
            attrs: {
                fill: '#7EB801',
                d: 'M17 4h11v11H17V4Z',
            },
        }), h('path', {
            attrs: {
                fill: '#FFB700',
                d: 'M17 17h11v11H17V17Z',
            },
        })]);
    },
};
