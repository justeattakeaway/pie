import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagNorway',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--norway');
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
                fill: '#EEE',
                d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M1.241 9.827a7.006 7.006 0 0 0 2.5 3.724V9.827h-2.5Zm6.152 5.146a7 7 0 0 0 7.366-5.146H7.392v5.146h.002Zm7.367-8.8a7 7 0 0 0-7.37-5.146v5.146h7.37ZM3.74 2.45a7.005 7.005 0 0 0-2.499 3.724h2.5V2.45Z',
            },
        }), h('path', {
            attrs: {
                fill: '#0052B4',
                d: 'M14.94 7.087H6.477v-5.92a6.954 6.954 0 0 0-1.823.683v5.237H1.06a7.06 7.06 0 0 0 0 1.826h3.593v5.237a6.951 6.951 0 0 0 1.823.683v-5.92h8.463a7.077 7.077 0 0 0 0-1.826Z',
            },
        })]);
    },
};
