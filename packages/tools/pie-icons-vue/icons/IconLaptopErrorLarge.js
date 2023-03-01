import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopErrorLarge',
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
            class: 'c-pieIcon c-pieIcon--laptopErrorLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.817 8.449l-2.835 2.8-2.8-2.8-1.233 1.233 2.817 2.81-2.817 2.825 1.233 1.234 2.835-2.8 2.8 2.8 1.234-1.233-2.817-2.818 2.817-2.818-1.233-1.233z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 19.264V7.25a2.625 2.625 0 00-2.625-2.625H8.125A2.625 2.625 0 005.5 7.25v12.014L2 25.389v.236a2.625 2.625 0 002.625 2.625h22.75A2.625 2.625 0 0030 25.625v-.236l-3.5-6.125zM7.25 7.25a.875.875 0 01.875-.875h15.75a.875.875 0 01.875.875v11.375H7.25V7.25zM27.375 26.5h-8.207l-.657-.875H13.49l-.657.875H4.625a.875.875 0 01-.875-.683l3.133-5.442h18.235l3.132 5.442a.875.875 0 01-.875.683z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.75 22.125h-3.5v1.75h3.5v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23 22.125h-3.5v1.75H23v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5 22.125H9v1.75h3.5v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
