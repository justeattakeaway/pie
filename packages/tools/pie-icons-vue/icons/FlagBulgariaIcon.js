import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FlagBulgariaIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 15 14'
            },
            class: 'c-pieIcon c-pieIcon--flagBulgaria'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.0024 6.99881C14.0024 6.14282 13.8492 5.32237 13.5648 4.56483L7.0012 4.25853L0.437629 4.56483C-0.145876 6.13503 -0.145876 7.8626 0.437629 9.4328L7.0012 9.7391L13.5648 9.4328C13.8492 8.67526 14.0024 7.85481 14.0024 6.99881Z',
                fill: '#496E2D'
            }
        }), h('path', {
            attrs: {
                d: 'M7.00115 14C8.4306 13.9998 9.82576 13.5621 10.9991 12.7456C12.1725 11.9292 13.0678 10.7731 13.5648 9.4328H0.437629C0.934588 10.7731 1.82985 11.9292 3.00319 12.7456C4.17654 13.5621 5.57169 13.9998 7.00115 14Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M0.437629 4.56483H13.5648C13.0674 3.22497 12.1719 2.06943 10.9986 1.25341C9.82528 0.437391 8.43033 0 7.00115 0C5.57197 0 4.17702 0.437391 3.0037 1.25341C1.83038 2.06943 0.934963 3.22497 0.437629 4.56483Z',
                fill: '#EEEEEE'
            }
        })]);
    }
};
