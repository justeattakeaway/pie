import * as React from "react";
import { SVGProps } from "react";
const IconChatFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--chat-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M25.625 4.625H6.375A2.625 2.625 0 0 0 3.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 0 1 .621-.254h14a2.625 2.625 0 0 0 2.625-2.625v-14a2.625 2.625 0 0 0-2.625-2.625ZM9.437 14.25a1.313 1.313 0 1 1 2.626 0 1.313 1.313 0 0 1-2.626 0Zm5.25 0a1.313 1.313 0 1 1 2.626 0 1.313 1.313 0 0 1-2.625 0Zm6.563 1.313a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Z" /></svg>;
};
export default IconChatFilledLarge;