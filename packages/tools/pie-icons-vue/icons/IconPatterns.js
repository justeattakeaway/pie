import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPatterns',
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
            class: 'c-pieIcon c-pieIcon--patterns'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_7066_3739)'
            }
        }, [h('path', {
            attrs: {
                d: 'M1.55127 14.5887H7.21252V8.93624H1.55127V14.5887ZM2.86377 10.2487H5.89127V13.2762H2.86377V10.2487Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.12752 7.62374C7.82502 7.62374 9.20752 6.24125 9.20752 4.54375C9.20752 2.84625 7.82502 1.46375 6.12752 1.46375C4.43002 1.46375 3.04752 2.84625 3.04752 4.54375C3.04752 6.24125 4.43002 7.62374 6.12752 7.62374ZM6.12752 2.77625C7.09877 2.77625 7.89502 3.5725 7.89502 4.54375C7.89502 5.515 7.09877 6.31124 6.12752 6.31124C5.15627 6.31124 4.36002 5.515 4.36002 4.54375C4.36002 3.5725 5.15627 2.77625 6.12752 2.77625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.2025 4.54375L7.86877 10.8875H14.545L11.2113 4.54375H11.2025ZM11.2025 7.36125L12.3663 9.575H10.0388L11.2025 7.36125Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_7066_3739'
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
