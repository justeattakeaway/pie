import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPhoneOffLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--phoneOffLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm17.882 19.552-2.81 3.842a17.925 17.925 0 0 1-3-2.231l8.53-8.523c.319.53.49 1.133.5 1.75h1.75a5.25 5.25 0 0 0-.98-3.045l1.872-1.872a7.875 7.875 0 0 1 1.75 4.917h1.75a9.625 9.625 0 0 0-2.24-6.125l3.605-3.64h-2.467l-2.39 2.389a9.625 9.625 0 0 0-6.124-2.231v1.75a7.875 7.875 0 0 1 4.909 1.75l-1.9 1.846a5.25 5.25 0 0 0-3.035-.971v1.75a3.448 3.448 0 0 1 1.75.49l-8.514 8.522a18.26 18.26 0 0 1-2.328-3.229l3.334-2.555a2.546 2.546 0 0 0 .691-3.211l-3.42-6.457-2.223 1.19a4.567 4.567 0 0 0-2.372 4.646 20.195 20.195 0 0 0 2.1 6.571 19.82 19.82 0 0 0 2.993 4.279l-6.221 6.221h2.467l4.979-4.979a19.613 19.613 0 0 0 4.06 2.905 19.25 19.25 0 0 0 6.72 2.197h.534a4.47 4.47 0 0 0 3.902-2.398l1.47-2.739-6.396-3.5a2.485 2.485 0 0 0-3.246.691ZM6.252 10.06a2.818 2.818 0 0 1 1.47-2.861l.675-.36 2.625 4.918a.787.787 0 0 1-.21.989l-3.098 2.38a18.375 18.375 0 0 1-1.461-5.066Zm18.262 14.254a2.677 2.677 0 0 1-2.669 1.443 17.5 17.5 0 0 1-5.25-1.531l2.67-3.64a.735.735 0 0 1 .962-.21l4.908 2.712-.62 1.226Z',
            },
        })]);
    },
};
