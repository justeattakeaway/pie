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
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--microsoftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4 4h11v11H4V4z',
                fill: '#F15121'
            }
        }), h('path', {
            attrs: {
                d: 'M4 17h11v11H4V17z',
                fill: '#00A3EE'
            }
        }), h('path', {
            attrs: {
                d: 'M17 4h11v11H17V4z',
                fill: '#7EB801'
            }
        }), h('path', {
            attrs: {
                d: 'M17 17h11v11H17V17z',
                fill: '#FFB700'
            }
        })]);
    }
};
