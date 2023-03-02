import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialTwitterCircle',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--twitterCircle',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_889_616)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M11.22 5.786c.339-.195.596-.506.726-.875-.325.192-.68.328-1.05.403a1.654 1.654 0 00-2.852 1.47 4.725 4.725 0 01-3.413-1.75 1.662 1.662 0 00.516 2.205 1.698 1.698 0 01-.752-.21v.096A1.662 1.662 0 005.76 8.7c-.143.035-.29.053-.438.052a1.75 1.75 0 01-.306 0A1.636 1.636 0 006.556 9.9a3.308 3.308 0 01-2.056.726h-.394A4.699 4.699 0 0011.342 6.6v-.219c.328-.236.607-.533.823-.875a3.15 3.15 0 01-.945.28z',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm0 12.25A5.468 5.468 0 118 2.488a5.468 5.468 0 010 10.937z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_889_616',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
