import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialBloggerCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bloggerCircleFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.375 14.399c.081.009.164.009.245 0h2.537a.875.875 0 0 0-.052-1.706h-2.721a.875.875 0 0 0 0 1.67l-.009.036Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.93 14.691a4.471 4.471 0 0 1-3.316 4.314 4.55 4.55 0 0 1-1.138.14h-4.821a4.445 4.445 0 0 1-4.331-3.456 4.533 4.533 0 0 1-.114-.971v-4.935a4.454 4.454 0 0 1 3.342-4.297c.364-.09.737-.137 1.112-.14h2.266a4.454 4.454 0 0 1 4.445 4.428.875.875 0 0 0 .578.805.875.875 0 0 0 .332.061h.77c.192 0 .379.068.525.192a.874.874 0 0 1 .35.7v3.16Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M18.826 17.75a.956.956 0 0 0-.271 0h-4.918a1.067 1.067 0 0 0-.262 0 .813.813 0 0 0-.613.534.778.778 0 0 0 .158.796.805.805 0 0 0 .639.28h5.153a.804.804 0 0 0 .088-1.584l.026-.026Z',
            },
        })]);
    },
};
