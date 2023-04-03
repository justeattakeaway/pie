import * as React from "react";
import { SVGProps } from "react";
const IconCashFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--cash-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M4.625 11.625h-1.75v12.25h22.75v-1.75h-21v-10.5Z" /><path fill="#242E30" d="M6.375 8.125v12.25h22.75V8.125H6.375Zm6.125 7H9v-1.75h3.5v1.75Zm5.25 1.75a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Zm8.75-1.75H23v-1.75h3.5v1.75Z" /></svg>;
};
export default IconCashFilledLarge;