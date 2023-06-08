import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconEggs',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--eggs');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.233 8.065c-.253-.845-.689-1.76-1.142-2.387l1.055-.766c.531.74 1.045 1.803 1.332 2.779l-1.254.374h.009Z',
            },
        })]);
    },
};
