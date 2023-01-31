import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBallotBoxLarge',
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
            class: 'c-pieIcon c-pieIcon--ballotBoxLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.855 7.53L19.1413 8.72L16 12.115C15.8887 12.2362 15.7535 12.333 15.6029 12.3992C15.4523 12.4655 15.2895 12.4998 15.125 12.5C14.9613 12.4994 14.7995 12.4657 14.6491 12.4011C14.4988 12.3364 14.363 12.2421 14.25 12.1237L12.99 10.75L14.2937 9.58625L15.125 10.4787L17.855 7.53ZM9.875 14.25V3.75H17.75C18.3245 3.75 18.8934 3.86316 19.4242 4.08303C19.955 4.30289 20.4373 4.62515 20.8436 5.03141C21.2498 5.43766 21.5721 5.91996 21.792 6.45076C22.0118 6.98156 22.125 7.55047 22.125 8.125V14.25H23.875V16H8.125V14.25H9.875ZM11.625 14.25H20.375V8.125C20.375 7.42881 20.0984 6.76113 19.6062 6.26884C19.1139 5.77656 18.4462 5.5 17.75 5.5H11.625V14.25ZM28.25 9V27.375H3.75V9H8.125V10.75H5.5V19.5H26.5V10.75H23.875V9H28.25ZM26.5 25.625V21.25H5.5V25.625H26.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
