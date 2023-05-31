import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGeolocationCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--geolocationCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 1.42a6.58 6.58 0 1 0 0 13.16A6.58 6.58 0 0 0 8 1.42Zm0 11.83a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm4.351 8.28 1.33.332a2.345 2.345 0 0 1 1.75 1.75l.333 1.33h1.172l2.293-6.877L4.35 7.064V8.28Zm4.769-1.4-.761 2.284A3.649 3.649 0 0 0 6.836 7.64L9.12 6.88Z',
            },
        })]);
    },
};
