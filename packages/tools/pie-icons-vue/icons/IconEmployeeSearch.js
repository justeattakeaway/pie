import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconEmployeeSearch',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--employeeSearch', 'IconEmployeeSearch');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_369)',
            },
        }, [h('path', {
            attrs: {
                d: 'M7.125 7.125a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Zm0-4.813a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm4.813 5.47a2.852 2.852 0 0 0-2.844 2.843c.005.526.153 1.04.429 1.488l-1.925 1.925.927.962 1.925-1.925c.448.275.962.423 1.488.429a2.844 2.844 0 0 0 0-5.688v-.035Zm0 4.374a1.532 1.532 0 1 1 1.53-1.531 1.54 1.54 0 0 1-1.53 1.531Zm-4.06-2.625H5.856a2.826 2.826 0 0 0-2.704 1.811L2.48 13.25h-1.4l.875-2.345A4.139 4.139 0 0 1 5.89 8.219h2.66L7.878 9.53ZM1 13.582v-.096.105-.008Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_369',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
