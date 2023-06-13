import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaintbrushLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--paintbrushLarge');
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
                d: 'M16.096 25.835a.796.796 0 1 0 0-1.593.796.796 0 0 0 0 1.593Z',
            },
        }), h('path', {
            attrs: {
                d: 'M27.375 4.625h-4.297l-1.828 3.36-.595-3.36H4.668l1.75 9.721v1.96a2.625 2.625 0 0 0 2.625 2.625h3.5c.135 0 .264.046.368.131.097.08.167.186.201.307l-.796 5.014a3.745 3.745 0 0 0 1.26 3.438 3.79 3.79 0 0 0 2.459.875c.86.004 1.694-.29 2.362-.831l.088-.07a3.77 3.77 0 0 0 1.365-3.5l-.779-5.031a.42.42 0 0 1 .14-.228.446.446 0 0 1 .324-.131H23a2.625 2.625 0 0 0 2.625-2.625v-2.205l1.75-9.45ZM8.536 6.375l.936 5.119h1.75l-.91-5.119h1.75l.928 5.119h1.75l-.867-5.119h5.33l.953 5.127h1.234l2.738-5.127h1.12l-1.268 6.877H8.02L6.768 6.375h1.768Zm15.339 9.931a.875.875 0 0 1-.875.875h-3.413a2.24 2.24 0 0 0-2.222 2.013v.114l.814 5.25a1.996 1.996 0 0 1-.735 1.942l-.088.079a2.03 2.03 0 0 1-2.625-.044 2.003 2.003 0 0 1-.674-1.846l.832-5.25v-.114a2.346 2.346 0 0 0-.875-1.584 2.371 2.371 0 0 0-1.47-.516h-3.5a.875.875 0 0 1-.876-.875v-1.348h15.707v1.304Z',
            },
        })]);
    },
};
