import * as React from "react";
import { SVGProps } from "react";
const IconChevronUpLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--chevron-up-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M26.124 22.125 16 11.625h-.096l-10.028 10.5-1.251-1.234 10.063-10.5a1.916 1.916 0 0 1 2.624 0L27.376 20.91l-1.251 1.216Z" /></svg>;
};
export default IconChevronUpLarge;