import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRocketShip',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--rocketShip', 'IconRocketShip');
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
                d: 'm14.659 1.814-.097-.377-.376-.096A6.317 6.317 0 0 0 7.834 3.24L6.478 4.596a.21.21 0 0 1-.158.061H4.141a1.242 1.242 0 0 0-.98.368L1.954 6.25l7.796 7.752 1.207-1.198a1.277 1.277 0 0 0 .368-.954V9.636a.254.254 0 0 1 .061-.157l1.357-1.357a6.291 6.291 0 0 0 1.916-6.308Zm-2.87 5.381-1.357 1.356c-.282.29-.442.68-.446 1.085v2.24l-.28.272L3.818 6.25l.288-.28H6.32a1.522 1.522 0 0 0 1.085-.446l1.356-1.357a5.057 5.057 0 0 1 4.708-1.645 5.03 5.03 0 0 1-1.68 4.673Zm-.796-2.188a1.138 1.138 0 1 1-1.611 1.608 1.138 1.138 0 0 1 1.61-1.608ZM4.5 10.625 1.945 13.25 1 12.305 3.625 9.75l.875.875Zm.875.875.875.875-1.68 1.75-.945-.945 1.75-1.68Z',
            },
        })]);
    },
};
