import * as React from "react";
import { SVGProps } from "react";
const IconArrowUp = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--arrow-up" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8.656 14.125V3.931l3.29 3.29.928-.927L8.77 2.199a1.085 1.085 0 0 0-1.54 0L3.126 6.294l.928.927 3.29-3.29v10.194h1.312Z" /></svg>;
};
export default IconArrowUp;