import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialFacebookLarge',
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
            class: 'c-pieIcon c-pieIcon--facebookLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#1778F2',
                d: 'M16 3.75a12.25 12.25 0 0 0-1.916 24.351v-8.557h-3.107V16h3.107v-2.695c0-3.071 1.828-4.769 4.628-4.769.918.013 1.833.092 2.74.237v3.018h-1.54a1.748 1.748 0 0 0-1.996 1.908V16h3.395l-.542 3.544h-2.853V28.1A12.25 12.25 0 0 0 16 3.75Z',
            },
        })]);
    },
};
