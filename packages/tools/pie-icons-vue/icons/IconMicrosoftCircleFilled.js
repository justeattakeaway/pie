import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMicrosoftCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--microsoftCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_2820_3487)'
            }
        }, [h('path', {
            attrs: {
                d: 'M7.99986 1.17505C6.66053 1.17508 5.35119 1.57171 4.23699 2.31492C3.12278 3.05814 2.25362 4.11465 1.7391 5.3512C1.22458 6.58776 1.08776 7.94899 1.34589 9.26321C1.60402 10.5774 2.24554 11.7858 3.18954 12.7359C4.13354 13.686 5.33775 14.3352 6.65029 14.6018C7.96283 14.8684 9.32491 14.7403 10.5648 14.2338C11.8046 13.7272 12.8667 12.8649 13.6171 11.7555C14.3674 10.6461 14.7725 9.33932 14.7811 8.00002C14.7857 7.10614 14.6138 6.22015 14.2752 5.39288C13.9365 4.56561 13.4379 3.81335 12.8079 3.17924C12.1778 2.54514 11.4288 2.04168 10.6037 1.69775C9.77862 1.35382 8.89375 1.17619 7.99986 1.17505Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.70993 11H5V8.28507H7.7255L7.70993 11Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M11 11H8.2745V8.28507H11V11Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M7.70993 7.71493H5V5H7.7255L7.70993 7.71493Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M11 7.71493H8.2745V5H11V7.71493Z',
                fill: 'white'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_2820_3487'
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
