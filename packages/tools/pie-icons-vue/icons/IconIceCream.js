import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconIceCream',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--iceCream');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.148 7.939v-.875a2.625 2.625 0 0 0-.98-2.048 1.71 1.71 0 0 0 0-.21 3.185 3.185 0 0 0-6.37 0c0 .206.024.412.07.613a2.188 2.188 0 0 0-1.024 1.794V8a.604.604 0 0 0 .087.324l3.5 6.125a.657.657 0 0 0 1.138 0l3.5-6.125a.604.604 0 0 0 .079-.385Zm-6.02-3.176a1.872 1.872 0 0 1 3.71-.333h-.22c-.25-.014-.5.01-.743.07l.385 1.251a1.4 1.4 0 0 1 .341 0 1.251 1.251 0 0 1 1.216 1.295v.411a18.376 18.376 0 0 1-5.661-.035v-.21a.998.998 0 0 1 1.094-.91.997.997 0 0 1 .359.062l.367-1.252a2.476 2.476 0 0 0-.726-.122h-.096a1.085 1.085 0 0 1-.026-.228ZM8 12.802 5.734 8.876c.753.076 1.51.108 2.266.096.754.012 1.508-.02 2.258-.096L8 12.804Z',
            },
        })]);
    },
};
