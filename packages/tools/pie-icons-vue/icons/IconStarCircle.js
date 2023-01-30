import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarCircle',
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
            class: 'c-pieIcon c-pieIcon--starCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1.21875 8C1.21875 4.26375 4.26375 1.21875 8 1.21875C11.745 1.21875 14.7812 4.26375 14.7812 8C14.7812 11.7362 11.7362 14.7812 8 14.7812C4.26375 14.7812 1.21875 11.7362 1.21875 8ZM2.53125 8C2.53125 11.0188 4.98125 13.4688 8 13.4688C11.0188 13.4688 13.4688 11.0188 13.4688 8C13.4688 4.98125 11.01 2.53125 8 2.53125C4.99 2.53125 2.53125 4.98125 2.53125 8ZM8 5.3225L8.81375 6.97625L10.6338 7.23875L9.32125 8.525L9.6275 10.3363L8 9.47875L6.3725 10.3363L6.6875 8.525L5.36625 7.23875L7.18625 6.97625L8 5.3225Z',
                fill: '#242E30'
            }
        })]);
    }
};
