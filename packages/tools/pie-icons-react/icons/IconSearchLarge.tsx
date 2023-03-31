import * as React from "react";
import { SVGProps } from "react";
const IconSearchLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--search-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M27.996 26.754 23 21.766A10.972 10.972 0 1 0 21.766 23l4.988 4.988 1.242-1.234Zm-13.309-2.879a9.187 9.187 0 1 1 9.188-9.188 9.196 9.196 0 0 1-9.188 9.188Z" /></svg>;
};
export default IconSearchLarge;