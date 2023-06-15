import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMealVoucherFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--mealVoucherFilled', 'IconMealVoucherFilled');
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
                d: 'M9.12 6.932a7.875 7.875 0 0 1 .761-4.313.761.761 0 0 1 .42-.35.647.647 0 0 1 .508.061c.254.149.367.429.411 1.015.114 2.03 0 4.961-.061 6.405h-1.05c0-.481.052-1.146.079-1.908L9.67 7.73a.779.779 0 0 1-.551-.797Zm-3.395-.2V9.75h1.05V6.731c.446-.131.875-.429.875-.927V2.26l-2.853.289v3.255c.035.49.482.787.928.927Zm7.963-1.138h-1.103c0 1.636-.061 3.281-.114 4.226a1.321 1.321 0 0 1-1.312 1.242h-.534a1.75 1.75 0 0 1-1.75-1.75v-.875H8v.875a1.75 1.75 0 0 1-1.75 1.75 1.837 1.837 0 0 1-1.838-1.837V7.527a2.135 2.135 0 0 1-.874-1.75v-.183H2.313a1.094 1.094 0 0 0-1.094 1.093v5.25a1.094 1.094 0 0 0 1.093 1.094h11.376a1.094 1.094 0 0 0 1.093-1.094v-5.25a1.094 1.094 0 0 0-1.094-1.093Z',
            },
        })]);
    },
};
