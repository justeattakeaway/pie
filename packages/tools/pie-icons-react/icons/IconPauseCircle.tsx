import * as React from "react";
import { SVGProps } from "react";
const IconPauseCircle = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--pause-circle" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Z" /><path fill="#242E30" d="M7.344 5.813H6.03v4.375h1.313V5.811Z" /><path fill="#242E30" d="M9.969 5.813H8.656v4.375H9.97V5.811Z" /></svg>;
};
export default IconPauseCircle;