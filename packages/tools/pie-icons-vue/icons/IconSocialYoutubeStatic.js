import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialYoutubeStatic',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--youtubeStatic');
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
                fill: 'red',
                d: 'M13.95 4.985a1.567 1.567 0 0 0-1.093-1.118c-.964-.264-4.831-.264-4.831-.264s-3.867 0-4.831.264a1.567 1.567 0 0 0-1.093 1.118c-.259.987-.259 3.045-.259 3.045s0 2.058.259 3.045c.142.544.56.973 1.093 1.119.964.264 4.83.264 4.83.264s3.867 0 4.832-.264a1.567 1.567 0 0 0 1.093-1.119c.258-.986.258-3.045.258-3.045s0-2.058-.258-3.045Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M6.761 9.899 9.993 8.03 6.761 6.161V9.9Z',
            },
        })]);
    },
};
