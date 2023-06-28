import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLinkExternal',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkExternal', 'IconLinkExternal');
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
                d: 'M13.25 3.564 8.21 8.63l-.928-.928 5.093-5.066H9.662V1.324h3.833a1.093 1.093 0 0 1 1.067 1.093V6.25H13.25V3.564Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.302 12.831c.343-.34.537-.804.54-1.287V7.598h1.312v3.946a3.141 3.141 0 0 1-3.142 3.132h-5.46a3.141 3.141 0 0 1-3.14-3.132V6.075a3.132 3.132 0 0 1 3.14-3.132h3.79v1.312h-3.79a1.829 1.829 0 0 0-1.802 1.82v5.469a1.829 1.829 0 0 0 1.802 1.82h5.46c.484 0 .948-.192 1.29-.533Z',
            },
        })]);
    },
};
