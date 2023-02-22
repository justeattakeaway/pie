import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialBloggerCircleFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--bloggerCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_3633_3280)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M6.823 6.582l-.013.008a.372.372 0 00-.291.362.369.369 0 00.29.36h1.209a.378.378 0 00.336-.284.373.373 0 00.004-.156.37.37 0 00-.362-.29H6.823z'
            }
        }), h('path', {
            attrs: {
                d: 'M6.912 9.454h2.252v-.01a.354.354 0 00.294-.329.351.351 0 00-.259-.357.369.369 0 00-.12 0H6.935a.337.337 0 00-.372.23.35.35 0 00.35.466z'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm2.61 6.129c.084 0 .165.027.23.08a.38.38 0 01.16.303v1.375c0 .427-.142.843-.403 1.183-.262.339-.629.583-1.044.693-.164.04-.331.061-.5.062H6.951c-.248 0-.495-.048-.725-.141a1.955 1.955 0 01-1.177-1.344A1.97 1.97 0 015 9.075V6.93c.003-.428.147-.844.411-1.181A1.952 1.952 0 016.947 5h.987c.425 0 .84.14 1.178.397.339.257.584.617.698 1.026.044.164.066.333.066.502a.386.386 0 00.252.353.444.444 0 00.146.026h.337z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3633_3280'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
