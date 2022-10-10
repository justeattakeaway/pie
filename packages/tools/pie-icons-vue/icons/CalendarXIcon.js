import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarXIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--calendarX"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.32664 10.5087H19.7867L20.6596 8.76308H7.45382L8.32664 10.5087Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.0748 4.36407V2.61844H18.3291V4.36407H9.60095V2.61844H7.85532V4.36407H2.61841V25.3117H20.9476C22.105 25.3117 23.215 24.8519 24.0335 24.0335C24.8519 23.2151 25.3117 22.105 25.3117 20.9476V4.36407H20.0748ZM23.566 20.9476C23.566 21.6421 23.2902 22.3081 22.7991 22.7991C22.3081 23.2902 21.642 23.5661 20.9476 23.5661H4.36404V6.10971H7.85532V6.98253H9.60095V6.10971H18.3291V6.98253H20.0748V6.10971H23.566V20.9476Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.7705 14.2444L16.5399 13.005L13.7643 15.7805L10.9887 13.005L9.74933 14.2444L12.5249 17.0199L9.74933 19.7955L10.9887 21.0262L13.7643 18.2506L16.5399 21.0262L17.7705 19.7955L14.995 17.0199L17.7705 14.2444Z"
      }
    })]);
  }

};