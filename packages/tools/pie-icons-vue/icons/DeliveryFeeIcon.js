import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DeliveryFeeIcon',
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
            class: 'c-pieIcon c-pieIcon--deliveryFee'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_2472)'
            }
        }, [h('path', {
            attrs: {
                d: 'M13.1275 1.73499L7.79875 3.68624L4.64 10.5025L11.92 13.8712L15.0788 7.06374L13.1275 1.73499ZM11.0625 11.5525L6.95875 9.64499L9.07625 5.07749L12.0863 3.97499L13.1888 6.98499L11.0625 11.5525ZM1.875 6.24999H4.5V7.99999H1.875V6.24999ZM6.03125 4.49999H1V2.74999H6.03125V4.49999Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_2472'
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
