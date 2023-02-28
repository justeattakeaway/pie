import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialTwitterLarge',
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
            class: 'c-pieIcon c-pieIcon--twitterLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.269 10.614c.015.23.015.461.015.694 0 7.087-5.325 15.26-15.064 15.26v-.003a14.847 14.847 0 01-8.116-2.405 10.544 10.544 0 007.836-2.223c-2.265-.044-4.252-1.54-4.946-3.725a5.21 5.21 0 002.39-.092c-2.47-.506-4.247-2.704-4.247-5.257v-.068c.736.415 1.56.645 2.403.67-2.326-1.574-3.043-4.71-1.639-7.16a14.963 14.963 0 0010.912 5.603 5.412 5.412 0 011.532-5.125 5.252 5.252 0 017.49.233 10.541 10.541 0 003.363-1.302A5.372 5.372 0 0125.87 8.68c1.05-.125 2.075-.41 3.04-.844a10.835 10.835 0 01-2.641 2.778z',
                fill: '#1D9BF0'
            }
        })]);
    }
};
