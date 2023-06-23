import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconAlertCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--alertCircleLarge', 'IconAlertCircleLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.547 10.111a4.584 4.584 0 0 1 2.905 0l-.743 7.639H15.29l-.744-7.639Zm2.765 10.701a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Z',
            },
        })]);
    },
};
