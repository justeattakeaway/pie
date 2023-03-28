import * as React from "react";
import { SVGProps } from "react";
const IconArrowRight = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--arrow-right" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M1 8.75h11.65l-3.76 3.76L10 13.57l4.68-4.69a1.239 1.239 0 0 0 0-1.76L10 2.43 8.89 3.49l3.76 3.76H1v1.5Z" /></svg>;
};
export default IconArrowRight;