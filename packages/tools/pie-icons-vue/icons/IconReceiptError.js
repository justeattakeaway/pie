import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconReceiptError',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--receiptError');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.719 3.444a.201.201 0 0 1-.175 0L8.006 2.297 5.47 3.444a.201.201 0 0 1-.175 0L2.1 2v12.39l3.194-1.444a.202.202 0 0 1 .175 0l2.537 1.146 2.538-1.146a.202.202 0 0 1 .175 0l3.194 1.444V2l-3.194 1.444ZM12.6 12.36l-1.339-.604a1.505 1.505 0 0 0-1.26 0l-1.995.902-1.995-.875a1.488 1.488 0 0 0-1.26 0l-1.338.603V4.03l1.338.604a1.505 1.505 0 0 0 1.26 0l1.995-.902 1.995.875a1.488 1.488 0 0 0 1.26 0l1.34-.603v8.356Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.979 7.131 8.938 8.2l1.076 1.067-.936.937L8.01 9.126l-1.067 1.077-.937-.937L7.083 8.2 6.006 7.13l.937-.936L8.01 7.271l1.068-1.076.9.936Z',
            },
        })]);
    },
};
