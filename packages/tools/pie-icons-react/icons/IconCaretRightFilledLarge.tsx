import * as React from "react";
import { SVGProps } from "react";
const IconCaretRightFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--caret-right-filled-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m23.875 14.425-14-8.671A1.654 1.654 0 0 0 9 5.5a1.689 1.689 0 0 0-1.689 1.68v17.64a1.68 1.68 0 0 0 2.625 1.409l13.939-8.96a1.68 1.68 0 0 0 0-2.844Z" /></svg>;
};
export default IconCaretRightFilledLarge;