import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPlayCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--playCircleFilledLarge');
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
                d: 'm20.043 16-6.633 3.456-.026-6.93L20.043 16Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M9.194 5.814a12.25 12.25 0 1 1 13.612 20.372A12.25 12.25 0 0 1 9.194 5.814Zm4.688 15.366 7.56-3.964A1.46 1.46 0 0 0 22.125 16a1.479 1.479 0 0 0-.7-1.234l-7.516-3.928a1.417 1.417 0 0 0-1.462-.088 1.46 1.46 0 0 0-.778 1.321v7.875a1.46 1.46 0 0 0 1.444 1.47c.274 0 .542-.083.77-.236Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
