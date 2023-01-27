import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CalendarAlertIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--calendarAlert'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.32663 10.4738H19.7867L20.6596 8.72819H7.45381L8.32663 10.4738Z'
            }
        }), h('path', {
            attrs: {
                d: 'M20.0748 4.36411V2.61847H18.3291V4.36411H9.60095V2.61847H7.85532V4.36411H2.61841V25.3117H20.9476C22.105 25.3117 23.215 24.8519 24.0335 24.0335C24.8519 23.2151 25.3117 22.1051 25.3117 20.9476V4.36411H20.0748ZM23.566 20.9476C23.566 21.6421 23.2902 22.3081 22.7991 22.7992C22.3081 23.2902 21.642 23.5661 20.9476 23.5661H4.36404V6.10974H7.85532V6.98256H9.60095V6.10974H18.3291V6.98256H20.0748V6.10974H23.566V20.9476Z'
            }
        }), h('path', {
            attrs: {
                d: 'M14.8728 12.2195H13.1271V17.4564H14.8728V12.2195Z'
            }
        }), h('path', {
            attrs: {
                d: 'M13.9999 21.8205C14.723 21.8205 15.3092 21.2343 15.3092 20.5112C15.3092 19.7882 14.723 19.202 13.9999 19.202C13.2769 19.202 12.6907 19.7882 12.6907 20.5112C12.6907 21.2343 13.2769 21.8205 13.9999 21.8205Z'
            }
        })]);
    }
};
