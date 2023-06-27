import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWifiAlertLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--wifiAlertLarge', 'IconWifiAlertLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 28 28',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.78 16.188A6.291 6.291 0 0 0 14 14.874 6.65 6.65 0 0 0 8.864 17.5l1.356 1.111A4.917 4.917 0 0 1 14 16.625a4.918 4.918 0 0 1 3.78 1.942l.359-.288a3.01 3.01 0 0 1-.42-1.523c.003-.19.024-.381.06-.569Z',
            },
        }), h('path', {
            attrs: {
                d: 'M17.447 4.777A15.006 15.006 0 0 0 14 4.375a15.952 15.952 0 0 0-12.381 6.169l1.347 1.111A14.254 14.254 0 0 1 14 6.125a13.23 13.23 0 0 1 3.622.525v-.411l-.122-1.33',
            },
        }), h('path', {
            attrs: {
                d: 'm23.809 7.963-.184 2.17c.51.477.988.986 1.435 1.522l1.347-1.111a18.87 18.87 0 0 0-2.598-2.581Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14 9.625a11.463 11.463 0 0 0-8.873 4.498l1.348 1.11A9.767 9.767 0 0 1 14 11.376a8.864 8.864 0 0 1 4.191 1.076L18 10.43a10.5 10.5 0 0 0-4-.805Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14 23.406a1.531 1.531 0 1 0 0-3.062 1.531 1.531 0 0 0 0 3.062Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.329 6.072a4.585 4.585 0 0 1 2.905 0l-.744 7.64h-1.418l-.743-7.64Zm2.765 10.702a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0Z',
            },
        })]);
    },
};
