import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationExpandLarge',
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
            class: 'c-pieIcon c-pieIcon--navigationExpandLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.47998 4.48022V27.5109H23.0817C24.2563 27.5109 25.3829 27.0443 26.2134 26.2137C27.044 25.3831 27.5107 24.2566 27.5107 23.0819V4.48022H4.47998ZM11.5663 25.7393H6.25157V6.25182H11.5663V25.7393ZM25.7391 23.0819C25.7391 23.7867 25.4591 24.4626 24.9607 24.961C24.4624 25.4593 23.7865 25.7393 23.0817 25.7393H13.3379V6.25182H25.7391V23.0819Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.4676 16.9522L21.1684 18.653H15.1095V20.4245H21.1684L19.4676 22.1253L20.7166 23.3831L23.622 20.4777C23.8687 20.2274 24.007 19.8901 24.007 19.5388C24.007 19.1874 23.8687 18.8501 23.622 18.5998L20.7166 15.7033L19.4676 16.9522Z',
                fill: '#242E30'
            }
        })]);
    }
};
