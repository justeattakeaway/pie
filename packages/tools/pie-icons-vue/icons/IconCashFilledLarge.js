import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--cashFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 11.625H2.875V23.875H25.625V22.125H4.625V11.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.375 8.125V20.375H29.125V8.125H6.375ZM12.5 15.125H9V13.375H12.5V15.125ZM17.75 16.875C17.2308 16.875 16.7233 16.721 16.2916 16.4326C15.86 16.1442 15.5235 15.7342 15.3248 15.2545C15.1261 14.7749 15.0742 14.2471 15.1754 13.7379C15.2767 13.2287 15.5267 12.761 15.8938 12.3938C16.261 12.0267 16.7287 11.7767 17.2379 11.6754C17.7471 11.5742 18.2749 11.6261 18.7545 11.8248C19.2342 12.0235 19.6442 12.3599 19.9326 12.7916C20.221 13.2233 20.375 13.7308 20.375 14.25C20.375 14.9462 20.0984 15.6139 19.6062 16.1062C19.1139 16.5984 18.4462 16.875 17.75 16.875ZM26.5 15.125H23V13.375H26.5V15.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
