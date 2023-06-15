import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLogoSkipCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--skipCircleLarge', 'IconLogoSkipCircleLarge');
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
                d: 'M28.5 16.25a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M17.438 14.488c-.522-.61-.857-1.044-.78-1.522.096-.595.51-1.196 1.236-1.196.798 0 1.004.168 1.451.389a.348.348 0 0 0 .498-.209l.656-2.334-.453-.222-.067-.032-.021-.01A4.033 4.033 0 0 0 18.248 9c-2.47 0-4.719 1.862-5.09 4.15-.258 1.601.717 2.73 1.428 3.556l.063.071c.514.581.875 1.032.787 1.555-.147.909-.856 1.208-1.448 1.208-.938 0-1.21-.155-1.728-.41-.073-.036-.21-.103-.325-.063a.355.355 0 0 0-.23.238l-.625 2.25-.081.288s1.23.657 2.652.657c2.106 0 3.926-.85 5.007-2.903.27-.524.43-1.098.47-1.687.055-1.5-1.05-2.677-1.692-3.422Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
