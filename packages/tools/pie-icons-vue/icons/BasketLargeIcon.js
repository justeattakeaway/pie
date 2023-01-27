import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'BasketLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--basketLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 15.125H15.125V22.125H16.875V15.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5175 22.125L11.66 15.125H9.875L10.75 22.125H12.5175Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.88 9.875L20.13 4.625H18.2838L20.0338 9.875H11.9663L13.7163 4.625H11.87L10.12 9.875H2V11.625H3.8725L5.84125 25.1262C5.93233 25.7554 6.24862 26.3301 6.73139 26.7437C7.21415 27.1572 7.83059 27.3816 8.46625 27.375H23.56C24.1957 27.3816 24.8121 27.1572 25.2949 26.7437C25.7776 26.3301 26.0939 25.7554 26.185 25.1262L28.1275 11.625H30V9.875H21.88ZM24.4262 24.8725C24.3965 25.0827 24.2914 25.275 24.1304 25.4135C23.9694 25.5519 23.7636 25.6271 23.5512 25.625H8.44C8.22768 25.6271 8.02184 25.5519 7.86085 25.4135C7.69987 25.275 7.59472 25.0827 7.565 24.8725L5.64 11.625H26.36L24.4262 24.8725Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M20.3575 15.125L19.5088 22.125H21.2675L22.125 15.125H20.3575Z',
                fill: '#242E30'
            }
        })]);
    }
};
