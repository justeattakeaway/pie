import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChatConversationLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--chat-conversation-large", className, iconSize, "IconChatConversationLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M22.125 17.75V7.25A2.625 2.625 0 0 0 19.5 4.625h-14A2.625 2.625 0 0 0 2.875 7.25v16.625h2.266l3.238-3.246c.167-.16.39-.25.621-.254h10.5a2.625 2.625 0 0 0 2.625-2.625Zm-14.98 1.645-2.52 2.52V7.25a.875.875 0 0 1 .875-.875h14a.875.875 0 0 1 .875.875v10.5a.875.875 0 0 1-.875.875H9c-.696 0-1.363.278-1.855.77Zm21.98-6.895v16.625H26.85l-3.229-3.246a.92.92 0 0 0-.621-.254H12.5A2.625 2.625 0 0 1 9.875 23v-.875h1.75V23a.875.875 0 0 0 .875.875H23c.688.002 1.35.268 1.846.744l2.529 2.546V12.5a.875.875 0 0 0-.875-.875h-2.625v-1.75H26.5a2.625 2.625 0 0 1 2.625 2.625Zm-15.313 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Zm4.376 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm-8.75 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.625 0Z" /></svg>;
};
export default IconChatConversationLarge;