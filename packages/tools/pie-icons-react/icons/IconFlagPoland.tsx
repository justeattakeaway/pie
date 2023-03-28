import * as React from "react";
import { SVGProps } from "react";
const IconFlagPoland = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--poland" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M15 8A7 7 0 1 1 1 8" /></svg>;
};
export default IconFlagPoland;