import * as React from "react";
import { SVGProps } from "react";
const IconFlagDenmark = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--denmark" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M6.476 7.087h8.463A7 7 0 0 0 8 1a7.027 7.027 0 0 0-1.523.164v5.923Zm-1.823 0V1.85A7.005 7.005 0 0 0 1.06 7.087h3.593Zm0 1.826H1.06a7.005 7.005 0 0 0 3.593 5.236V8.913Zm1.823 0v5.92a7 7 0 0 0 8.463-5.92H6.476Z" /></svg>;
};
export default IconFlagDenmark;