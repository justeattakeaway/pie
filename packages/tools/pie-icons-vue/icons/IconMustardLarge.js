import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMustardLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--mustardLarge', 'IconMustardLarge');
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
                d: 'M22.619 15.255v-.166c0-.697-.27-1.35-.828-1.9l-1.935-1.603-.06-2.98h-1.09L16.884 2.87h-1.856l-1.743 5.735h-1.089l-.035 2.98-2.013 1.656a2.59 2.59 0 0 0-.767 1.847v.166l.061.157a13.738 13.738 0 0 1 .593 8.383l-.628 2.562-.026.21a2.622 2.622 0 0 0 2.615 2.614h8.017a2.622 2.622 0 0 0 2.614-2.615l-.653-2.77c-.689-2.807-.48-5.7.592-8.384l.061-.157h-.008Zm-5.735-6.632H15.09l.88-2.884.915 2.884Zm-5.577 5.9 2.58-2.118.026-2.074h.017v.026h4.122v-.026h.009l.061 2.074 2.492 2.057c.131.13.218.296.244.48-.148.383-.279.775-.4 1.167h-8.942a11.54 11.54 0 0 0-.4-1.168.847.847 0 0 1 .182-.418h.01Zm.619 3.329h8.14a15.582 15.582 0 0 0-.14 4.366h-7.87c.166-1.456.114-2.92-.139-4.366h.009Zm8.078 9.569h-8.017a.885.885 0 0 1-.872-.785l.602-2.44.052-.244h8.453c.018.078.026.166.052.244l.602 2.44a.878.878 0 0 1-.872.785Z',
            },
        })]);
    },
};
