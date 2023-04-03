import * as React from "react";
import { SVGProps } from "react";
const IconCaretLeftFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--caret-left-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M23 5.5a1.689 1.689 0 0 0-.875.271l-14 8.96a1.68 1.68 0 0 0 0 2.844l14 8.671c.262.165.565.253.875.254a1.689 1.689 0 0 0 1.689-1.68V7.18A1.688 1.688 0 0 0 23 5.5Z" /></svg>;
};
export default IconCaretLeftFilledLarge;