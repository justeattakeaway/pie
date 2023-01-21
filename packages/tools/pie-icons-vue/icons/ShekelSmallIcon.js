import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShekelSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--shekelSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 4.15625H2.40625V12.25H1.09375V2.84375H7C7.63818 2.84375 8.25022 3.09726 8.70148 3.54852C9.15274 3.99978 9.40625 4.61182 9.40625 5.25V8.75H8.09375V5.25C8.09375 4.95992 7.97852 4.68172 7.7734 4.4766C7.56828 4.27148 7.29008 4.15625 7 4.15625ZM11.5938 2.625V10.7188H7C6.70992 10.7188 6.43172 10.6035 6.2266 10.3984C6.02148 10.1933 5.90625 9.91508 5.90625 9.625V6.125H4.59375V9.625C4.59375 10.2632 4.84726 10.8752 5.29852 11.3265C5.74978 11.7777 6.36182 12.0312 7 12.0312H12.9062V2.625H11.5938Z"
      }
    })]);
  }
};