import * as React from "react";
import { SVGProps } from "react";
const IconFlagBelgium = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--belgium" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#FFDA44" d="M10.433 1.438a6.986 6.986 0 0 0-4.867 0L4.956 8l.61 6.562a6.984 6.984 0 0 0 4.867 0L11.043 8l-.61-6.562Z" /><path fill="#D80027" d="M15 8a7 7 0 0 0-4.567-6.562v13.124A7.001 7.001 0 0 0 15 8Z" /><path fill="#333" d="M1 8a7 7 0 0 0 4.566 6.562V1.438A6.999 6.999 0 0 0 1 8Z" /></svg>;
};
export default IconFlagBelgium;