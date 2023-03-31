import * as React from "react";
import { SVGProps } from "react";
const IconMoreHorizontalLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--more-horizontal-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M7.688 14.031a1.969 1.969 0 1 1 0 3.938 1.969 1.969 0 0 1 0-3.938ZM14.03 16a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Zm8.313 0a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Z" /></svg>;
};
export default IconMoreHorizontalLarge;