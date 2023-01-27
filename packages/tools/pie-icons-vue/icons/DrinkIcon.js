import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DrinkIcon',
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
            class: 'c-pieIcon c-pieIcon--drink'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 4.71875H8.65625V3.2225L10.835 2.49625L10.415 1.25375L7.34375 2.2775V4.71875H3.625V6.03125H4.21125L4.87625 13.39C4.91126 13.7714 5.08792 14.1258 5.37138 14.3833C5.65484 14.6409 6.02452 14.7829 6.4075 14.7813H9.5925C9.97548 14.7829 10.3452 14.6409 10.6286 14.3833C10.9121 14.1258 11.0887 13.7714 11.1237 13.39L11.7887 6.03125H12.375V4.71875ZM9.81125 13.25C9.80684 13.3049 9.78186 13.3562 9.74131 13.3935C9.70075 13.4308 9.64761 13.4514 9.5925 13.4513H6.4075C6.35239 13.4514 6.29925 13.4308 6.25869 13.3935C6.21814 13.3562 6.19316 13.3049 6.18875 13.25L5.52375 6.03125H10.4762L9.81125 13.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
