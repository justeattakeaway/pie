import * as React from "react";
import { SVGProps } from "react";
const IconMenu = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--menu" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M15 4.281H1V2.97h14V4.28Zm0 7.438H1v1.312h14V11.72Zm0-4.375H1v1.312h14V7.344Z" /></svg>;
};
export default IconMenu;