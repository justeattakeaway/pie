import * as React from "react";
import { SVGProps } from "react";
const IconNoteLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--note-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M22.125 23H3.75v1.75h18.375V23Z" /><path fill="#242E30" d="M28.25 7.25H3.75V9h24.5V7.25Z" /><path fill="#242E30" d="M28.25 15.125H3.75v1.75h24.5v-1.75Z" /></svg>;
};
export default IconNoteLarge;