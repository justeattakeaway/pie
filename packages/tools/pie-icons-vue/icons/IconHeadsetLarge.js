import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHeadsetLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--headsetLarge');
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
                d: 'M16 2.875A10.57 10.57 0 0 0 5.5 13.498v10.377a4.375 4.375 0 0 0 4.375 4.375h8.75V26.5h-8.75a2.625 2.625 0 0 1-2.625-2.625v-.997c.235.076.48.117.726.122H9.14a2.511 2.511 0 0 0 2.485-2.546V17.11a2.52 2.52 0 0 0-2.476-2.546H7.25v-1.067A8.829 8.829 0 0 1 16 4.625a8.829 8.829 0 0 1 8.75 8.873v1.067h-1.899a2.52 2.52 0 0 0-2.476 2.546v3.343A2.513 2.513 0 0 0 22.851 23h1.173a2.513 2.513 0 0 0 2.476-2.546v-6.957A10.57 10.57 0 0 0 16 2.876Zm-6.86 13.44a.763.763 0 0 1 .726.796v3.343a.761.761 0 0 1-.726.796H7.976a.763.763 0 0 1-.726-.796v-4.139h1.89Zm15.61 4.139a.76.76 0 0 1-.726.796H22.85a.762.762 0 0 1-.726-.796V17.11a.762.762 0 0 1 .726-.796h1.899v4.139Zm-7.245.796h1.873a3.5 3.5 0 0 1-6.755 0h1.872a1.75 1.75 0 0 0 3.01 0Z',
            },
        })]);
    },
};
