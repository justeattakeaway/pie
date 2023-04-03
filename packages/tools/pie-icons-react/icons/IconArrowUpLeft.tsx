import * as React from "react";
import { SVGProps } from "react";
const IconArrowUpLeft = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--arrow-up-left" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m12.795 11.867-7.21-7.21h4.655V3.345H4.439a1.094 1.094 0 0 0-1.094 1.094v5.801h1.313V5.585l7.21 7.21.927-.928Z" /></svg>;
};
export default IconArrowUpLeft;