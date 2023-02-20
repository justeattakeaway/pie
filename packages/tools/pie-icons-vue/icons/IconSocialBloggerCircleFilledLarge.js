import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialBloggerCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--bloggerCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.375 14.399c.081.009.164.009.245 0h2.537a.875.875 0 00-.052-1.706h-2.721a.875.875 0 000 1.67l-.009.036z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm6.93 14.691a4.471 4.471 0 01-3.316 4.314 4.55 4.55 0 01-1.138.14h-4.821a4.445 4.445 0 01-4.331-3.456 4.533 4.533 0 01-.114-.971v-4.935a4.454 4.454 0 013.342-4.297c.364-.09.737-.137 1.112-.14h2.266a4.454 4.454 0 014.445 4.428.875.875 0 00.578.805.875.875 0 00.332.061h.77c.192 0 .379.068.525.192a.874.874 0 01.35.7v3.16z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.826 17.75a.956.956 0 00-.271 0h-4.918a1.067 1.067 0 00-.262 0 .813.813 0 00-.613.534.778.778 0 00.158.796.805.805 0 00.639.28h5.153a.804.804 0 00.088-1.584l.026-.026z',
                fill: '#242E30'
            }
        })]);
    }
};
