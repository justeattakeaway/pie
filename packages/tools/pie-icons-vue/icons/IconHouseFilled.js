import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouseFilled',
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
            class: 'c-pieIcon c-pieIcon--houseFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_2290_4013)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.875 2.34754C8.6082 2.19527 8.30602 2.11592 7.99883 2.11745C7.69164 2.11899 7.39026 2.20136 7.125 2.35629C4.77125 3.90504 1.11375 7.90379 1 8.07879L1.97125 8.95379C1.97125 8.95379 2.39125 8.49004 3.0125 7.84254V13.8975H13.075V7.86004C13.6875 8.49879 14.0987 8.94504 14.1075 8.96254L15.0788 8.08754C13.1873 5.99189 11.111 4.07081 8.875 2.34754ZM7.125 10.625C7.125 10.393 7.21719 10.1704 7.38128 10.0063C7.54538 9.84222 7.76794 9.75004 8 9.75004C8.23206 9.75004 8.45462 9.84222 8.61872 10.0063C8.78281 10.1704 8.875 10.393 8.875 10.625V12.5938H7.125V10.625Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_2290_4013'
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
