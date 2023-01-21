import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeliveryFeeSmallIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--deliveryFeeSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.1275 0.734985L6.79875 2.68624L3.64 9.50249L10.92 12.8712L14.0788 6.06374L12.1275 0.734985ZM10.0625 10.5525L5.95875 8.64499L8.07625 4.07749L11.0863 2.97499L12.1888 5.98499L10.0625 10.5525ZM0.875 5.24999H3.5V6.99999H0.875V5.24999ZM5.03125 3.49999H0V1.74999H5.03125V3.49999Z"
      }
    })]);
  }
};