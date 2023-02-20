import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialFacebookCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--facebookCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.671a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm3.85 7.403h-1.138a1.294 1.294 0 00-1.46 1.426v1.689h2.493l-.402 2.625H17.25v6.282a8.75 8.75 0 01-2.817 0V16.77H12.15v-2.625h2.284v-1.96a3.175 3.175 0 013.403-3.5c.675.01 1.347.068 2.013.175v2.214z',
                fill: '#242E30'
            }
        })]);
    }
};
