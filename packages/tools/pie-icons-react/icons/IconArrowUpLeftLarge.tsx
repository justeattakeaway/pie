import * as React from "react";
import { SVGProps } from "react";
const IconArrowUpLeftLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--arrow-up-left-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M25.284 24.041 9.814 8.571h9.922v-1.75H8.58a1.75 1.75 0 0 0-1.75 1.75v11.165h1.75V9.805l15.47 15.47 1.234-1.234Z" /></svg>;
};
export default IconArrowUpLeftLarge;