import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconInfoMarkerLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--infoMarkerLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M24.75 3.024H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75a2.625 2.625 0 0 0 2.625 2.625h3.439L16 29.335l5.311-5.311h3.439a2.625 2.625 0 0 0 2.625-2.625V5.649a2.625 2.625 0 0 0-2.625-2.625Zm.875 18.375a.875.875 0 0 1-.875.875h-4.165L16 26.859l-4.585-4.585H7.25a.875.875 0 0 1-.875-.875V5.649a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v15.75Zm-10.5-9.774h1.75V19.5h-1.75v-7.875Zm2.188-3.063a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Z',
            },
        })]);
    },
};
