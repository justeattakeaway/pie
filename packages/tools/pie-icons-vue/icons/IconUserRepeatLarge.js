import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserRepeatLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userRepeatLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm9.56 20.436-.254.928h1.82l.123-.464c.498-1.811 1.837-3.019 3.333-3.019h3.562c1.496 0 2.835 1.208 3.333 3.019l.123.464h1.82l-.254-.928a5.53 5.53 0 0 0-4.454-4.252c.175-.12.34-.255.49-.403a4.016 4.016 0 1 0-5.678 0c.151.148.315.283.49.403a5.53 5.53 0 0 0-4.454 4.252Zm5.197-9.108a2.275 2.275 0 1 1 0 3.22 2.266 2.266 0 0 1 0-3.22ZM28.617 16a12.25 12.25 0 0 1-24.5 0 12.101 12.101 0 0 1 1.83-6.431l-2.626.376-.245-1.75 4.804-.691a.875.875 0 0 1 .989.744l.69 4.812-1.75.245-.367-2.835A10.369 10.369 0 0 0 5.867 16a10.5 10.5 0 1 0 10.5-10.5V3.75A12.25 12.25 0 0 1 28.617 16Z',
            },
        })]);
    },
};
