import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialYoutubeCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--youtubeCircleFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm6.707 9.174a1.774 1.774 0 00-1.237-1.267c-1.092-.299-5.47-.299-5.47-.299s-4.378 0-5.47.3a1.774 1.774 0 00-1.237 1.266C9 14.04 9 16.37 9 16.37s0 2.33.293 3.448c.16.616.635 1.1 1.237 1.266 1.092.299 5.47.299 5.47.299s4.378 0 5.47-.3a1.774 1.774 0 001.237-1.265C23 18.701 23 16.37 23 16.37s0-2.33-.293-3.447zm-8.138 5.563l3.659-2.116-3.66-2.116v4.232z',
                fill: '#242E30',
            },
        })]);
    },
};
