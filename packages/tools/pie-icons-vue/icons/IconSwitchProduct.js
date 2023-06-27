import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSwitchProduct',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--switchProduct', 'IconSwitchProduct');
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
                d: 'M5.261 2.094H2.094V5.26H5.26V2.094Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.261 6.407H2.094v3.168H5.26V6.408Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.584 2.094H6.416V5.26h3.168V2.094Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.584 6.407H6.416v3.168h3.168V6.408Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.261 10.73H2.094v3.168H5.26V10.73Z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.584 10.73H6.416v3.168h3.168V10.73Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.898 2.094H10.73V5.26h3.168V2.094Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.898 6.407H10.73v3.168h3.168V6.408Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.898 10.73H10.73v3.168h3.168V10.73Z',
            },
        })]);
    },
};
