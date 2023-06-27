import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconNumberSymbolLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--numberSymbolLarge', 'IconNumberSymbolLarge');
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
                d: 'm23 13.375.245-1.75H20.62l.63-4.375H19.5l-.639 4.375h-4.375l.639-4.375h-1.75l-.639 4.375H9.997l-.245 1.75h2.687l-.77 5.25h-2.67l-.244 1.75h2.625l-.63 4.375h1.75l.639-4.375h4.375l-.64 4.375h1.75l.64-4.375h2.695l.245-1.75H19.56l.814-5.25H23Zm-5.189 5.25h-4.375l.814-5.25h4.375l-.814 5.25Z',
            },
        })]);
    },
};
