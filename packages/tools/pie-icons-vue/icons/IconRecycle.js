import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRecycle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--recycle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.58 12.279a1.496 1.496 0 0 1-1.33.778h-3.246l.945.928-.928.936-2.546-2.546 2.546-2.529.928.937-.945.936h3.246a.21.21 0 0 0 .193-.114.184.184 0 0 0 0-.201l-1.55-2.625 1.13-.665 1.557 2.625a1.505 1.505 0 0 1 0 1.54ZM8.193 2.566l1.6 2.704-1.33-.385-.367 1.26 3.448.98 1.006-3.412-1.26-.377-.367 1.252L9.32 1.875a1.549 1.549 0 0 0-2.625 0L5.218 4.369l1.128.665 1.462-2.468c.113-.183.27-.183.385 0Zm-3.86 5.872.43 1.312 1.25-.402-1.075-3.36-3.43 1.058.367 1.252 1.208-.368-1.654 2.826a1.531 1.531 0 0 0 1.321 2.301h3.028v-1.312H2.75a.21.21 0 0 1-.192-.114.184.184 0 0 1 0-.201l1.776-2.992Z',
            },
        })]);
    },
};
