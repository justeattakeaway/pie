import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'MicrosoftLargeIcon',
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
                d: 'M4 4H15V15H4V4Z',
                fill: '#F15121'
            }
        }), h('path', {
            attrs: {
                d: 'M4 17H15V28H4V17Z',
                fill: '#00A3EE'
            }
        }), h('path', {
            attrs: {
                d: 'M17 4H28V15H17V4Z',
                fill: '#7EB801'
            }
        }), h('path', {
            attrs: {
                d: 'M17 17H28V28H17V17Z',
                fill: '#FFB700'
            }
        })]);
    }
};
