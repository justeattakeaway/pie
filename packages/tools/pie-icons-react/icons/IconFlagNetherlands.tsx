import * as React from "react";
import { SVGProps } from "react";
const IconFlagNetherlands = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--netherlands" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#A2001D" d="M8 1a7 7 0 0 0-6.563 4.566h13.126A7 7 0 0 0 8 1Z" /><path fill="#0052B4" d="M8 15a7 7 0 0 0 6.563-4.566H1.437A7 7 0 0 0 8 15Z" /></svg>;
};
export default IconFlagNetherlands;