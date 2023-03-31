import * as React from "react";
import { SVGProps } from "react";
const IconLoading = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--loading" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.781 8A6.782 6.782 0 1 1 8 1.219V2.53A5.469 5.469 0 1 0 13.469 8h1.312ZM4.72 8H6.03A1.969 1.969 0 1 1 8 9.969v1.312A3.282 3.282 0 1 0 4.719 8Z" /></svg>;
};
export default IconLoading;