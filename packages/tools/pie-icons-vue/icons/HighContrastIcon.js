import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'HighContrastIcon',
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
            class: 'c-pieIcon c-pieIcon--highContrast'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_3104_5201)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.21875C4.26375 1.21875 1.21875 4.26375 1.21875 8C1.21875 11.7362 4.26375 14.7812 8 14.7812C11.7362 14.7812 14.7812 11.7362 14.7812 8C14.7812 4.26375 11.7362 1.21875 8 1.21875ZM8 13.4688C4.98125 13.4688 2.53125 11.01 2.53125 8C2.53125 4.99 4.98125 2.5225 8 2.5225C11.0188 2.5225 13.4688 4.98125 13.4688 7.99125C13.4688 11.0013 11.01 13.46 8 13.46V13.4688Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.84375 8C3.84375 10.2925 5.7075 12.1562 8 12.1562V3.835C5.7075 3.835 3.84375 5.69875 3.84375 7.99125V8Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_3104_5201'
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
