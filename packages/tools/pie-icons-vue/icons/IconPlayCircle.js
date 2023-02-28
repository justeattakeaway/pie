import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircle',
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
            class: 'c-pieIcon c-pieIcon--playCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm0 12.25A5.469 5.469 0 118 2.53a5.469 5.469 0 010 10.938z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.141 7.282L6.82 5.305a.77.77 0 00-.753.07.779.779 0 00-.367.656v3.973a.779.779 0 00.367.656.742.742 0 00.752.053l4.323-1.978a.788.788 0 000-1.435v-.018zm-4.13 1.882V6.836L9.557 8 7.011 9.164z',
                fill: '#242E30'
            }
        })]);
    }
};
