import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFaceHappyLarge',
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
            class: 'c-pieIcon c-pieIcon--faceHappyLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 22.75a10.5 10.5 0 110-21 10.5 10.5 0 010 21zm-4.375-11.813a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0zm11.375 0a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0zm-4.288 3.938h1.847a4.717 4.717 0 01-9.118 0h1.846a2.975 2.975 0 005.425 0z',
                fill: '#242E30'
            }
        })]);
    }
};
