import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMicrosoftCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--microsoftCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25C13.5772 28.25 11.2088 27.5316 9.19427 26.1855C7.17977 24.8395 5.60965 22.9263 4.68248 20.6879C3.75531 18.4495 3.51272 15.9864 3.98539 13.6101C4.45805 11.2339 5.62475 9.05114 7.33795 7.33795C9.05114 5.62475 11.2339 4.45805 13.6101 3.98539C15.9864 3.51272 18.4495 3.75531 20.6879 4.68248C22.9263 5.60965 24.8395 7.17977 26.1855 9.19427C27.5316 11.2088 28.25 13.5772 28.25 16C28.25 19.2489 26.9594 22.3647 24.6621 24.6621C22.3647 26.9594 19.2489 28.25 16 28.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10 10H15.5V15.5H10V10Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M10 16.5H15.5V22H10V16.5Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M16.5 10H22V15.5H16.5V10Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M16.5 16.5H22V22H16.5V16.5Z',
                fill: 'white'
            }
        })]);
    }
};
