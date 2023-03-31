import * as React from "react";
import { SVGProps } from "react";
const IconSortAscending = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--sort-ascending" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M1 7.344h6.816l-.551 1.312H1V7.344Zm8.286-3.5H1v1.312h7.735l.551-1.312ZM1 12.156h4.786l.56-1.312H1v1.312Zm12.994-2.502L12.156 11.5V6.25h-1.312v5.25L9.006 9.654l-.927.971 2.625 2.625a1.075 1.075 0 0 0 1.54 0l2.625-2.625-.875-.971Z" /></svg>;
};
export default IconSortAscending;