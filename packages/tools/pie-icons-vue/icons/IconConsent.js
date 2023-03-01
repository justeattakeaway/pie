import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConsent',
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
            class: 'c-pieIcon c-pieIcon--consent'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.924 11.57v-7c0-.84-.691-1.531-1.531-1.531h-8.75c-.84 0-1.532.691-1.532 1.531v7h-.849v1.313h13.502V11.57h-.84zm-10.5 0v-7c0-.122.096-.219.218-.219h8.75c.123 0 .22.097.22.22v7H3.423z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.126 5.541l-3.123 3.37-1.085-1.226-.98.875L5.97 9.724l.306.341a.993.993 0 001.453 0l.315-.341 3.045-3.281-.963-.893v-.009z',
                fill: '#242E30'
            }
        })]);
    }
};
