import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRadioUnselected',
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
            class: 'c-pieIcon c-pieIcon--radioUnselected'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.21875C4.26375 1.21875 1.21875 4.26375 1.21875 8C1.21875 11.7362 4.26375 14.7812 8 14.7812C11.7362 14.7812 14.7812 11.7362 14.7812 8C14.7812 4.26375 11.7362 1.21875 8 1.21875ZM8 13.4688C4.98125 13.4688 2.53125 11.0188 2.53125 8C2.53125 4.98125 4.98125 2.53125 8 2.53125C11.0188 2.53125 13.4688 4.98125 13.4688 8C13.4688 11.0188 11.0188 13.4688 8 13.4688Z',
                fill: '#242E30'
            }
        })]);
    }
};
