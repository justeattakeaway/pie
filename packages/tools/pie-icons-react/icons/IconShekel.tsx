import * as React from "react";
import { SVGProps } from "react";
const IconShekel = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--shekel" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 5.156H3.406v8.094H2.094V3.844H8a2.406 2.406 0 0 1 2.406 2.406v3.5H9.094v-3.5A1.094 1.094 0 0 0 8 5.156Zm4.594-1.531v8.094H8a1.094 1.094 0 0 1-1.094-1.094v-3.5H5.594v3.5A2.406 2.406 0 0 0 8 13.031h5.906V3.625h-1.312Z" /></svg>;
};
export default IconShekel;