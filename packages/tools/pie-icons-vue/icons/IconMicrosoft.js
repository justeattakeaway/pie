import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMicrosoft',
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
            class: 'c-pieIcon c-pieIcon--microsoft'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_2820_3494)'
            }
        }, [h('path', {
            attrs: {
                d: 'M7.37151 14.5H1.5V8.61765H7.40526L7.37151 14.5Z',
                fill: '#00A3EE'
            }
        }), h('path', {
            attrs: {
                d: 'M8.59474 14.5H14.5V8.61765H8.59474V14.5Z',
                fill: '#FFB700'
            }
        }), h('path', {
            attrs: {
                d: 'M7.37151 7.38235H1.5V1.5H7.40526L7.37151 7.38235Z',
                fill: '#F15121'
            }
        }), h('path', {
            attrs: {
                d: 'M14.5 7.38235H8.59474V1.5H14.5V7.38235Z',
                fill: '#7EB801'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_2820_3494'
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
