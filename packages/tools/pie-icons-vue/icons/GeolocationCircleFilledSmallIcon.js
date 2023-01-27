import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'GeolocationCircleFilledSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--geolocationCircleFilledSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.35882 8.16375L8.12007 5.88L5.83632 6.64125C6.48541 6.98405 7.01602 7.51466 7.35882 8.16375Z'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.99992 0.419983C5.69852 0.419983 4.42635 0.805893 3.34427 1.52891C2.2622 2.25193 1.41882 3.27959 0.920797 4.48193C0.422773 5.68426 0.292467 7.00728 0.546358 8.28368C0.800248 9.56007 1.42693 10.7325 2.34716 11.6527C3.26739 12.573 4.43984 13.1997 5.71623 13.4535C6.99262 13.7074 8.31564 13.5771 9.51798 13.0791C10.7203 12.5811 11.748 11.7377 12.471 10.6556C13.194 9.57356 13.5799 8.30138 13.5799 6.99998C13.5799 5.25486 12.8867 3.58121 11.6527 2.34722C10.4187 1.11323 8.74505 0.419983 6.99992 0.419983ZM4.68132 7.6125L3.35132 7.28V6.06375L10.2288 3.815L7.93632 10.6925H6.76382L6.43132 9.3625C6.33182 8.93664 6.11522 8.54708 5.80598 8.23784C5.49674 7.9286 5.10718 7.712 4.68132 7.6125Z'
            }
        })]);
    }
};
