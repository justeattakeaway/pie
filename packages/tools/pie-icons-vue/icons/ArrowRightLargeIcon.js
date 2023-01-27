import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowRightLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.75 16.8749H25.625L18.625 23.8749L19.8587 25.1087L27.7337 17.2337C27.8965 17.0712 28.0255 16.8782 28.1136 16.6657C28.2017 16.4533 28.247 16.2255 28.247 15.9956C28.247 15.7656 28.2017 15.5379 28.1136 15.3254C28.0255 15.113 27.8965 14.92 27.7337 14.7574L19.8587 6.88245L18.625 8.12495L25.625 15.1249H3.75V16.8749Z',
                fill: '#242E30'
            }
        })]);
    }
};
