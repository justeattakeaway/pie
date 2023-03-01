import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserMarker',
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
            class: 'c-pieIcon c-pieIcon--userMarker'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_1932)'
            }
        }, [h('path', {
            attrs: {
                d: 'M9.855 7.895a2.23 2.23 0 00-.306-2.747 2.266 2.266 0 00-3.124 0A2.223 2.223 0 006.154 8c-.585.25-1.05.717-1.295 1.304l-.499 1.321h1.4l.324-.875a1.295 1.295 0 011.225-.744h1.566a1.286 1.286 0 011.225.744l.324.875h1.409l-.5-1.321a2.477 2.477 0 00-1.478-1.409zm-2.503-1.82A.875.875 0 018 5.812a.875.875 0 01.639 1.54.906.906 0 11-1.286-1.277zm5.898-3.981H2.75a1.54 1.54 0 00-1.531 1.531V11.5a1.54 1.54 0 001.531 1.531h3.229L8 15.052l2.021-2.02h3.229a1.54 1.54 0 001.531-1.532V3.625a1.54 1.54 0 00-1.531-1.531zm.219 9.406a.219.219 0 01-.219.219H9.479L8 13.198l-1.479-1.48H2.75a.219.219 0 01-.219-.218V3.625a.219.219 0 01.219-.219h10.5a.219.219 0 01.219.219V11.5z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_1932'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
