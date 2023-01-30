import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--geolocationCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.35882 9.16375L9.12007 6.88L6.83632 7.64125C7.48541 7.98405 8.01602 8.51466 8.35882 9.16375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M7.99992 1.41998C6.69852 1.41998 5.42635 1.80589 4.34427 2.52891C3.2622 3.25193 2.41882 4.27959 1.9208 5.48193C1.42277 6.68426 1.29247 8.00728 1.54636 9.28368C1.80025 10.5601 2.42693 11.7325 3.34716 12.6527C4.26739 13.573 5.43984 14.1997 6.71623 14.4535C7.99262 14.7074 9.31564 14.5771 10.518 14.0791C11.7203 13.5811 12.748 12.7377 13.471 11.6556C14.194 10.5736 14.5799 9.30138 14.5799 7.99998C14.5799 6.25486 13.8867 4.58121 12.6527 3.34722C11.4187 2.11323 9.74505 1.41998 7.99992 1.41998ZM5.68132 8.6125L4.35132 8.28V7.06375L11.2288 4.815L8.93632 11.6925H7.76382L7.43132 10.3625C7.33182 9.93664 7.11522 9.54708 6.80598 9.23784C6.49674 8.9286 6.10718 8.712 5.68132 8.6125Z',
                fill: '#242E30'
            }
        })]);
    }
};
