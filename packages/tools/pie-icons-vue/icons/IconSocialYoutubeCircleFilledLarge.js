import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialYoutubeCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--youtubeCircleFilledLarge');
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
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.707 9.174a1.774 1.774 0 0 0-1.237-1.267c-1.092-.299-5.47-.299-5.47-.299s-4.378 0-5.47.3a1.774 1.774 0 0 0-1.237 1.266C9 14.04 9 16.37 9 16.37s0 2.33.293 3.448c.16.616.635 1.1 1.237 1.266 1.092.299 5.47.299 5.47.299s4.378 0 5.47-.3a1.774 1.774 0 0 0 1.237-1.265C23 18.701 23 16.37 23 16.37s0-2.33-.293-3.447Zm-8.138 5.563 3.659-2.116-3.66-2.116v4.232Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
