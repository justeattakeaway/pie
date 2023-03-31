import * as React from "react";
import { SVGProps } from "react";
const IconLaptopHighlight = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--laptop-highlight" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.031 9.094V4.5A1.54 1.54 0 0 0 11.5 2.969h-7A1.54 1.54 0 0 0 2.969 4.5v4.594h-1.75V11.5a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V9.094h-1.75ZM4.281 4.5a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v4.594H4.28V4.5Zm9.188 7a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-1.094H13.47V11.5Z" /></svg>;
};
export default IconLaptopHighlight;