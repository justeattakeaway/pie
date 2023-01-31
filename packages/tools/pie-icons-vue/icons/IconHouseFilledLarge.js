import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouseFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--houseFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.4875 5.02747C17.0315 4.7632 16.5139 4.62402 15.9869 4.62402C15.4599 4.62402 14.9422 4.7632 14.4862 5.02747C10.1113 7.82747 3.18125 15.125 2.875 15.3962L4.14375 16.6037C4.14375 16.6037 5.0625 15.65 6.375 14.355V27.375H25.625V14.355C26.9287 15.65 27.8213 16.5775 27.8388 16.6037L29.125 15.3962C28.8188 15.125 21.88 7.82747 17.4875 5.02747ZM14.4338 21.9412C14.4338 21.5258 14.5988 21.1274 14.8925 20.8337C15.1862 20.54 15.5846 20.375 16 20.375C16.4154 20.375 16.8138 20.54 17.1075 20.8337C17.4012 21.1274 17.5663 21.5258 17.5663 21.9412V25.625H14.4338V21.9412Z',
                fill: '#242E30'
            }
        })]);
    }
};
