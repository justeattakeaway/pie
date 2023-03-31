import * as React from "react";
import { SVGProps } from "react";
const IconSocialMicrosoftLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--microsoft-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#F15121" d="M4 4h11v11H4V4Z" /><path fill="#00A3EE" d="M4 17h11v11H4V17Z" /><path fill="#7EB801" d="M17 4h11v11H17V4Z" /><path fill="#FFB700" d="M17 17h11v11H17V17Z" /></svg>;
};
export default IconSocialMicrosoftLarge;