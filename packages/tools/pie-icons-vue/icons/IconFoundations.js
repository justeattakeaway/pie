import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFoundations',
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
            class: 'c-pieIcon c-pieIcon--foundations'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_7066_3748)'
            }
        }, [h('path', {
            attrs: {
                d: 'M10.7388 1.94501H5.2525V7.43126H10.7388V1.94501ZM9.42625 6.11876H6.565V3.25751H9.42625V6.11876Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.875 14.1688H7.36125V8.68251H1.875V14.1688ZM3.1875 9.99501H6.04875V12.8563H3.1875V9.99501Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.62125 8.67376V14.16H14.1075V8.67376H8.62125ZM12.795 12.8475H9.93375V9.98626H12.795V12.8475Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_7066_3748'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: 'white',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
