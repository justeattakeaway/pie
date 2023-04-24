import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOrder',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--order');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.64l3.193-1.444a.202.202 0 0 1 .176 0L8 13.967l2.537-1.146a.202.202 0 0 1 .175 0l3.194 1.444V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.141-1.339-.604a1.506 1.506 0 0 0-1.26 0L8 12.533l-1.995-.875a1.488 1.488 0 0 0-1.26 0l-1.339.603V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.61ZM5.375 5.594h5.25v1.312h-5.25V5.594Zm.875 2.625h3.5V9.53h-3.5V8.22Z',
            },
        })]);
    },
};
