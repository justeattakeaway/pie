import * as React from "react";
import { SVGProps } from "react";
const IconCaretDownFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--caret-down-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.92 3.713H4.045a1.313 1.313 0 0 0-1.041 2.056l4.051 5.941a1.321 1.321 0 0 0 1.085.577 1.312 1.312 0 0 0 1.085-.612l3.763-5.897a1.25 1.25 0 0 0 .16-1.26 1.312 1.312 0 0 0-1.228-.805Z" /></svg>;
};
export default IconCaretDownFilled;