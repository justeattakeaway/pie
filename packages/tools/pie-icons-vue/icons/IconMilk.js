import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMilk',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--milk');
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
                d: 'm10.81 5.095-.697-1.046v-.888h.496V1.854H5.67V3.16h.427v.888L5.4 5.095c-.182.27-.27.583-.27.897v6.734c0 1.08.88 1.96 1.96 1.96h2.03c1.08 0 1.96-.88 1.96-1.96V5.992c0-.322-.095-.636-.27-.906v.009ZM8.806 3.16v1.28l.915 1.377a.314.314 0 0 1 .052.174v1.307c-.436.13-.81-.053-1.429-.375-.523-.279-1.159-.584-1.908-.618v-.314c0-.061.018-.122.052-.174l.915-1.377v-1.28h1.403Zm.313 10.219H7.09a.658.658 0 0 1-.653-.654V7.612c.444.026.863.244 1.298.47.514.27 1.09.576 1.76.576.096 0 .183-.009.279-.018v4.095a.658.658 0 0 1-.654.653v-.008Z',
            },
        })]);
    },
};
