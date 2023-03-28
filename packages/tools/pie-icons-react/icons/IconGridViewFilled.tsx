import * as React from "react";
import { SVGProps } from "react";
const IconGridViewFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--grid-view-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M2.094 6.906h4.812V2.094H2.094v4.812Z" /><path fill="#242E30" d="M9.094 6.906h4.812V2.094H9.094v4.812Z" /><path fill="#242E30" d="M2.094 13.906h4.812V9.094H2.094v4.812Z" /><path fill="#242E30" d="M9.094 13.906h4.812V9.094H9.094v4.812Z" /></svg>;
};
export default IconGridViewFilled;