import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'BelgiumIcon',
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
            class: 'c-pieIcon c-pieIcon--belgium'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.4331 1.43755C8.86315 0.854151 7.13589 0.854151 5.56597 1.43755L4.95621 7.99991L5.56597 14.5623C7.13584 15.1459 8.86319 15.1459 10.4331 14.5623L11.0428 7.99991L10.4331 1.43755Z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9997 7.99991C14.9995 6.57071 14.5619 5.17582 13.7456 4.00269C12.9293 2.82956 11.7731 1.93441 10.4331 1.43755V14.5623C11.7731 14.0654 12.9293 13.1702 13.7456 11.9971C14.5619 10.824 14.9995 9.4291 14.9997 7.99991Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M1 7.99991C1.00017 9.4291 1.43782 10.824 2.25412 11.9971C3.07043 13.1702 4.22593 14.0654 5.56597 14.5623V1.43755C4.22593 1.93441 3.07043 2.82956 2.25412 4.00269C1.43782 5.17582 1.00017 6.57071 1 7.99991Z',
                fill: '#333333'
            }
        })]);
    }
};
