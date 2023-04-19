import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChat',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chat');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M3.538 14.781H2.094V4.5a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 4.5v6.125a1.54 1.54 0 0 1-1.531 1.531H6.25a.254.254 0 0 0-.157.061l-2.555 2.564Zm.087-10.5a.219.219 0 0 0-.219.219v8.557l1.75-1.75a1.522 1.522 0 0 1 1.094-.463h6.125a.219.219 0 0 0 .219-.219V4.5a.219.219 0 0 0-.219-.219h-8.75Z',
            },
        })]);
    },
};
