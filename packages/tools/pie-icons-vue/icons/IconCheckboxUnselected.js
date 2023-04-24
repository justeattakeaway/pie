import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheckboxUnselected',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--checkboxUnselected');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.375 13.906h-8.75c-.84 0-1.531-.691-1.531-1.531v-8.75c0-.84.691-1.531 1.531-1.531h8.75c.84 0 1.531.691 1.531 1.531v8.75c0 .84-.691 1.531-1.531 1.531Zm-8.75-10.5a.217.217 0 0 0-.219.219v8.75c0 .123.096.219.219.219h8.75a.217.217 0 0 0 .219-.219v-8.75a.217.217 0 0 0-.219-.219h-8.75Z',
            },
        })]);
    },
};
