import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBulgaria',
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
            class: 'c-pieIcon c-pieIcon--bulgaria'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.0024 7.99881C15.0024 7.14282 14.8492 6.32237 14.5648 5.56483L8.0012 5.25853L1.43763 5.56483C0.854124 7.13503 0.854124 8.8626 1.43763 10.4328L8.0012 10.7391L14.5648 10.4328C14.8492 9.67526 15.0024 8.85481 15.0024 7.99881Z',
                fill: '#496E2D'
            }
        }), h('path', {
            attrs: {
                d: 'M8.00115 15C9.4306 14.9998 10.8258 14.5621 11.9991 13.7456C13.1725 12.9292 14.0678 11.7731 14.5648 10.4328H1.43763C1.93459 11.7731 2.82985 12.9292 4.00319 13.7456C5.17654 14.5621 6.57169 14.9998 8.00115 15Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M1.43763 5.56483H14.5648C14.0674 4.22497 13.1719 3.06943 11.9986 2.25341C10.8253 1.43739 9.43033 1 8.00115 1C6.57197 1 5.17702 1.43739 4.0037 2.25341C2.83038 3.06943 1.93496 4.22497 1.43763 5.56483Z',
                fill: '#EEEEEE'
            }
        })]);
    }
};
