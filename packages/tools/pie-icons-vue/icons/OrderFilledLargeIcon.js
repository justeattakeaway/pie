import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'OrderFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--orderFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.875 3.75H8.125C7.42881 3.75 6.76113 4.02656 6.26884 4.51884C5.77656 5.01113 5.5 5.67881 5.5 6.375V28.3025L9.06125 26.4037L12.5 28.3813L16 26.4125L19.5 28.3813L22.93 26.4037L26.5 28.3025V6.375C26.5 5.67881 26.2234 5.01113 25.7312 4.51884C25.2389 4.02656 24.5712 3.75 23.875 3.75ZM19.5 21.25H12.5V19.5H19.5V21.25ZM21.25 17.75H10.75V16H21.25V17.75ZM12.5 10.9338L13.7425 9.69125L15.3088 11.2663L19.0625 7.50375L20.375 8.74625L15.3787 13.7337L12.5 10.9338Z',
                fill: '#242E30'
            }
        })]);
    }
};
