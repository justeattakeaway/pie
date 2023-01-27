import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'OrderFilledIcon',
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
            class: 'c-pieIcon c-pieIcon--orderFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.09375H3.625C3.2196 2.09605 2.83145 2.25811 2.54478 2.54478C2.25811 2.83145 2.09605 3.2196 2.09375 3.625V14.265L5.2875 12.8212C5.31479 12.8081 5.3447 12.8012 5.375 12.8012C5.4053 12.8012 5.43521 12.8081 5.4625 12.8212L8 13.9675L10.5375 12.8212C10.5648 12.8081 10.5947 12.8012 10.625 12.8012C10.6553 12.8012 10.6852 12.8081 10.7125 12.8212L13.9062 14.265V3.625C13.904 3.2196 13.7419 2.83145 13.4552 2.54478C13.1686 2.25811 12.7804 2.09605 12.375 2.09375ZM10.625 6.90625H5.375V5.59375H10.625V6.90625ZM9.75 9.53125H6.25V8.21875H9.75V9.53125Z',
                fill: '#242E30'
            }
        })]);
    }
};
