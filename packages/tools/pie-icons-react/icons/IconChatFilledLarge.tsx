import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChatFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chat-filled-large", className, iconSize, "IconChatFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M25.625 4.625H6.375A2.625 2.625 0 0 0 3.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 0 1 .621-.254h14a2.625 2.625 0 0 0 2.625-2.625v-14a2.625 2.625 0 0 0-2.625-2.625ZM9.437 14.25a1.313 1.313 0 1 1 2.626 0 1.313 1.313 0 0 1-2.626 0Zm5.25 0a1.313 1.313 0 1 1 2.626 0 1.313 1.313 0 0 1-2.625 0Zm6.563 1.313a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Z" /></svg>;
};
export default IconChatFilledLarge;