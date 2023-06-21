import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialMicrosoftCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--microsoftCircleFilledLarge', 'IconSocialMicrosoftCircleFilledLarge');
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
                'fill-rule': 'evenodd',
                d: 'M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM15.5 10H10v5.5h5.5V10Zm0 6.5H10V22h5.5v-5.5Zm1-6.5H22v5.5h-5.5V10Zm5.5 6.5h-5.5V22H22v-5.5Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
