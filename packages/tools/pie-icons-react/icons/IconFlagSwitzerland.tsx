import * as React from "react";
import { SVGProps } from "react";
const IconFlagSwitzerland = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--switzerland" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#D80027" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#EEE" d="M11.653 6.783H9.22V4.35H6.783v2.433H4.35v2.434h2.433v2.433h2.434V9.217h2.433l.003-2.434Z" /></svg>;
};
export default IconFlagSwitzerland;