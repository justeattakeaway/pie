import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialAndroidCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--androidCircleLarge');
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
                'fill-rule': 'evenodd',
                d: 'M15.58 9.275a3.816 3.816 0 0 0-2.309 1.104l-.689-1.33a.084.084 0 0 0-.12-.037c-.042.026-.056.088-.032.134l.71 1.372a3.595 3.595 0 0 0-.923 2.36h7.57a3.593 3.593 0 0 0-.93-2.366l.709-1.366c.023-.046.01-.108-.032-.134a.084.084 0 0 0-.12.036l-.687 1.326a3.818 3.818 0 0 0-2.302-1.099h-.845Zm-1.141 2.407c.24 0 .434-.211.434-.474v-.005c0-.263-.194-.474-.434-.474-.24.005-.434.216-.434.479s.194.474.434.474Zm3.238 0c.24 0 .434-.211.434-.474v-.005c0-.263-.194-.474-.434-.474-.24.005-.434.216-.434.479s.194.474.434.474Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.053 20.65h-2.106v2.412c0 .515-.374.938-.84.938-.467 0-.841-.418-.841-.938V20.65h-.037c-.578 0-1.04-.526-1.04-1.18v-6.082l.003-.054.002-.054h7.617v6.19c0 .654-.462 1.18-1.04 1.18h-.037v2.412c0 .515-.374.938-.84.938-.467 0-.84-.418-.84-.938V20.65Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.681 14.759c0-.52-.378-.938-.84-.938-.467 0-.841.423-.841.938v4.015c0 .52.374.938.84.938.467 0 .841-.423.841-.938v-4.015Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M22 14.759c0-.52-.379-.938-.84-.938-.467 0-.841.423-.841.938v4.015c0 .52.374.938.84.938.467 0 .841-.423.841-.938v-4.015Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z',
            },
        })]);
    },
};
