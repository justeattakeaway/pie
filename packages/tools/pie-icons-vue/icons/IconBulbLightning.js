import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconBulbLightning',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bulbLightning', 'IconBulbLightning');
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
                d: 'M10.162 13.469H5.838l.35 1.312h3.622l.35-1.312Z',
            },
        }), h('path', {
            attrs: {
                d: 'm5.375 10.117.35 2.04h4.611l.29-2.048c.07-.393.267-.752.56-1.024a4.523 4.523 0 0 0 1.408-3.273 4.594 4.594 0 0 0-9.126-.76A4.533 4.533 0 0 0 4.77 9.067c.306.278.517.645.604 1.05Zm-.612-4.856a3.281 3.281 0 0 1 6.518.551 3.239 3.239 0 0 1-.988 2.337c-.49.47-.821 1.082-.945 1.75l-.158.954H6.801l-.148-.945a3.238 3.238 0 0 0-.963-1.75 3.281 3.281 0 0 1-.927-2.897Z',
            },
        })]);
    },
};
