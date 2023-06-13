import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLevLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--levLarge');
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
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21ZM9.875 12.036h5.25v7.359h-1.75v-5.609h-1.75c-.227 4.944-2.266 5.714-3.5 5.714v-1.75c1.076 0 1.75-1.855 1.75-4.839v-.875Zm11.664 3.5a1.752 1.752 0 0 0 .875-1.444c0-1.172-.875-2.1-2.477-2.1h-3.14v7.403h3.22c1.75 0 2.808-.945 2.808-2.161a1.83 1.83 0 0 0-1.286-1.698Zm-3.019-2.161h1.19c.604 0 1.015.324 1.015.875 0 .551-.411.875-1.015.875h-1.19v-1.75Zm1.391 4.725H18.52v-1.864h1.391c.718 0 1.181.324 1.181.875 0 .552-.463.945-1.18.945v.044Z',
            },
        })]);
    },
};
