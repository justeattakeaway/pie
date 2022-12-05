import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CashFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--cashFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2.625 9.625H0.875V21.875H23.625V20.125H2.625V9.625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M4.375 6.125V18.375H27.125V6.125H4.375ZM10.5 13.125H7V11.375H10.5V13.125ZM15.75 14.875C15.2308 14.875 14.7233 14.721 14.2916 14.4326C13.86 14.1442 13.5235 13.7342 13.3248 13.2545C13.1261 12.7749 13.0742 12.2471 13.1754 11.7379C13.2767 11.2287 13.5267 10.761 13.8938 10.3938C14.261 10.0267 14.7287 9.77672 15.2379 9.67544C15.7471 9.57415 16.2749 9.62614 16.7545 9.82482C17.2342 10.0235 17.6442 10.3599 17.9326 10.7916C18.221 11.2233 18.375 11.7308 18.375 12.25C18.375 12.9462 18.0984 13.6139 17.6062 14.1062C17.1139 14.5984 16.4462 14.875 15.75 14.875ZM24.5 13.125H21V11.375H24.5V13.125Z"
      }
    })]);
  }

};