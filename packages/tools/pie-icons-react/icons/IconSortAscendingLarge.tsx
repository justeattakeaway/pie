import * as React from "react";
import { SVGProps } from "react";
const IconSortAscendingLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--sort-ascending-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M18.03 10.75H2V9h16.765l-.735 1.75ZM2 23h10.867l.735-1.75H2V23Zm0-6.125h13.449l.735-1.75H2v1.75Zm25.891 3.141-4.016 4.078V12.5h-1.75v11.524l-4.016-4.008-1.234 1.234 4.926 4.935a1.75 1.75 0 0 0 2.398 0l4.926-4.935-1.234-1.234Z" /></svg>;
};
export default IconSortAscendingLarge;