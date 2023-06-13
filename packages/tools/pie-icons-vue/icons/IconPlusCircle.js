import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPlusCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--plusCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z',
            },
        })]);
    },
};
