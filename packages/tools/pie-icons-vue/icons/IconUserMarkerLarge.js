import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserMarkerLarge',
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
            class: 'c-pieIcon c-pieIcon--userMarkerLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 15.125a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.25a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm5.25 8.566l.691 1.934H20.07l-.499-1.313a2.204 2.204 0 00-2.126-1.312h-2.511a2.205 2.205 0 00-2.127 1.313l-.498 1.312h-1.873l.726-1.934A3.972 3.972 0 0114.932 16h2.512a3.972 3.972 0 013.806 2.441zM26.5 4.625h-21A2.625 2.625 0 002.875 7.25v14.875A2.625 2.625 0 005.5 24.75h6.641L16 28.609l3.859-3.859H26.5a2.625 2.625 0 002.625-2.625V7.25A2.625 2.625 0 0026.5 4.625zm.875 17.5A.875.875 0 0126.5 23h-7.359L16 26.141 12.859 23H5.5a.875.875 0 01-.875-.875V7.25a.875.875 0 01.875-.875h21a.875.875 0 01.875.875v14.875z',
                fill: '#242E30',
            },
        })]);
    },
};
