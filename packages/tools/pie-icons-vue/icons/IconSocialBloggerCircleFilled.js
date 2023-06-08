import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialBloggerCircleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bloggerCircleFilled');
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
                'clip-path': 'url(#prefix__clip0_3633_3280)',
            },
        }, [h('path', {
            attrs: {
                d: 'm6.823 6.582-.013.008a.372.372 0 0 0-.291.362.369.369 0 0 0 .29.36h1.209a.378.378 0 0 0 .336-.284.373.373 0 0 0 .004-.156.37.37 0 0 0-.362-.29H6.823Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.912 9.454h2.252v-.01a.354.354 0 0 0 .294-.329.351.351 0 0 0-.259-.357.369.369 0 0 0-.12 0H6.935a.337.337 0 0 0-.372.23.35.35 0 0 0 .35.466Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm2.61 6.129c.084 0 .165.027.23.08a.38.38 0 0 1 .16.303v1.375c0 .427-.142.843-.403 1.183-.262.339-.629.583-1.044.693-.164.04-.331.061-.5.062H6.951c-.248 0-.495-.048-.725-.141a1.955 1.955 0 0 1-1.177-1.344A1.97 1.97 0 0 1 5 9.075V6.93c.003-.428.147-.844.411-1.181A1.952 1.952 0 0 1 6.947 5h.987c.425 0 .84.14 1.178.397.339.257.584.617.698 1.026.044.164.066.333.066.502a.386.386 0 0 0 .252.353.444.444 0 0 0 .146.026h.337Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3633_3280',
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
