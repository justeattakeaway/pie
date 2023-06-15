import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheckCircleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--checkCircleFilled', 'IconCheckCircleFilled');
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
                d: 'm13.985 4.815-5.04 5.425a1.181 1.181 0 0 1-1.352.282 1.216 1.216 0 0 1-.398-.282L4.99 7.781l.98-.875 2.117 2.38 5.163-5.591a6.737 6.737 0 1 0 .752 1.12h-.017Z',
            },
        })]);
    },
};
