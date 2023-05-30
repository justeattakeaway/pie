import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheckboxSelected',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--checkboxSelected');
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
                d: 'M12.375 2.094h-8.75c-.84 0-1.531.691-1.531 1.531v8.75c0 .84.691 1.531 1.531 1.531h8.75c.84 0 1.531-.691 1.531-1.531v-8.75c0-.84-.691-1.531-1.531-1.531Zm.219 10.281a.217.217 0 0 1-.219.219h-8.75a.217.217 0 0 1-.219-.219v-8.75c0-.123.096-.219.219-.219h8.75c.123 0 .219.096.219.219v8.75Zm-2.45-6.799.962.893-3.36 3.622a.979.979 0 0 1-.726.315c-.271 0-.534-.114-.726-.315L4.955 8.586l.98-.875L7.02 8.936l3.124-3.369v.01Z',
            },
        })]);
    },
};
