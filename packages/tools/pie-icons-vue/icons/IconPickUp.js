import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPickUp',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--pickUp',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4_159)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8.875 2.531H15V1.22H8.875a4.375 4.375 0 00-3.929 2.625H3.257l-.122.052A2.047 2.047 0 001.962 5.2a2.205 2.205 0 00.788 2.275l-.796 5.95c-.012.365.12.72.367.989a1.163 1.163 0 00.875.367h8.671a1.162 1.162 0 00.875-.367 1.364 1.364 0 00.36-1.05l-.77-5.793a2.695 2.695 0 001.478-1.54H15V4.72h-2.266l-.123.507a1.558 1.558 0 01-1.864 1.252l-.34-.062-1.13 1.129a.578.578 0 01-.805 0 .586.586 0 01-.12-.64.551.551 0 01.13-.183l1.618-1.54a.752.752 0 00.184-.875.77.77 0 00-.718-.49H6.46a2.888 2.888 0 012.415-1.286zm0 6.493a1.873 1.873 0 001.33-.551l.665-.666h.087l.753 5.662H3.266l.761-5.688h3.098a1.873 1.873 0 001.75 1.242zm-.639-3.868l-.665.63c-.198.192-.35.425-.446.683h-3.5a.936.936 0 01-.359-.875.717.717 0 01.324-.394h4.646v-.044z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4_159',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
