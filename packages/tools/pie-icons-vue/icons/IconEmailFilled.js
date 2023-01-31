import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEmailFilled',
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
            class: 'c-pieIcon c-pieIcon--emailFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_1597_534)'
            }
        }, [h('path', {
            attrs: {
                d: 'M9.3916 8.97123L8.4466 9.84623C8.32477 9.95801 8.16568 10.0204 8.00035 10.0212C7.83771 10.0199 7.68153 9.95744 7.56285 9.84623L6.58285 8.97123L2.0241 13.1012C2.19176 13.1651 2.36969 13.1977 2.5491 13.1975H13.4516C13.5679 13.2109 13.6853 13.2109 13.8016 13.1975L9.3916 8.97123Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.8516 12.375C14.9599 12.1606 15.0168 11.9239 15.0178 11.6837V4.35999C15.0165 4.15639 14.9779 3.95474 14.9041 3.76499L10.3541 8.07874L14.8516 12.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.08784 3.80874C1.02374 3.98521 0.994035 4.17234 1.00034 4.35999V11.64C1.00078 11.8642 1.05161 12.0855 1.14909 12.2875L5.60284 8.07874L1.08784 3.80874Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.00032 8.47249L13.9153 2.87249C13.765 2.82665 13.6087 2.80306 13.4516 2.80249H2.54907C2.3734 2.80376 2.19909 2.8333 2.03282 2.88999L8.00032 8.47249Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_1597_534'
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
