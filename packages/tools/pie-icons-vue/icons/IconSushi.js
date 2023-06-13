import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSushi',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sushi');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4_481)',
            },
        }, [h('path', {
            attrs: {
                d: 'm1.875 11.412 3.841-1.18-1.295 3.893h1.383L7.256 9.75 15 7.379l-.385-1.26h-.114a3.15 3.15 0 0 0-.586-3.684l-.359-.359a3.272 3.272 0 0 0-3.587-.612L8.76 1.105 6.25 8.7l-4.375 1.339v1.373Zm7.726-8.015.359-.358a1.899 1.899 0 0 1 2.045-.403c.226.093.432.23.606.403l.359.358a1.863 1.863 0 0 1 .551 1.33 1.83 1.83 0 0 1-.551 1.322l-.359.358a1.916 1.916 0 0 1-2.625 0l-.359-.358a1.881 1.881 0 0 1-.026-2.652Zm-1.269 3.16c.1.15.213.292.342.42l.359.358c.138.134.287.257.446.367l-1.706.525.56-1.67Z',
            },
        }), h('path', {
            attrs: {
                d: 'm10.695 3.971-.16.161a.84.84 0 0 0-.001 1.188l.16.161a.84.84 0 0 0 1.189 0l.16-.16a.84.84 0 0 0 0-1.189l-.16-.16a.84.84 0 0 0-1.188 0Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4_481',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
