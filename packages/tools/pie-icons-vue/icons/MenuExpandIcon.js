import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'MenuExpandIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--menuExpand'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.47998 2.48022V25.5109H21.0817C22.2563 25.5109 23.3829 25.0443 24.2134 24.2137C25.044 23.3831 25.5107 22.2566 25.5107 21.0819V2.48022H2.47998ZM9.56635 23.7393H4.25157V4.25182H9.56635V23.7393ZM23.7391 21.0819C23.7391 21.7867 23.4591 22.4626 22.9607 22.961C22.4624 23.4593 21.7865 23.7393 21.0817 23.7393H11.3379V4.25182H23.7391V21.0819Z'
            }
        }), h('path', {
            attrs: {
                d: 'M17.4676 14.9522L19.1684 16.653H13.1095V18.4245H19.1684L17.4676 20.1253L18.7166 21.3831L21.622 18.4777C21.8687 18.2274 22.007 17.8901 22.007 17.5388C22.007 17.1874 21.8687 16.8501 21.622 16.5998L18.7166 13.7033L17.4676 14.9522Z'
            }
        })]);
    }
};
