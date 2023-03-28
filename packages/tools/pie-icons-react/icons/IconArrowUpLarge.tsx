import * as React from "react";
import { SVGProps } from "react";
const IconArrowUpLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--arrow-up-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16.875 28.25V6.375l7 7 1.234-1.234-7.875-7.875a1.751 1.751 0 0 0-2.477 0l-7.874 7.875 1.242 1.234 7-7V28.25h1.75Z" /></svg>;
};
export default IconArrowUpLarge;