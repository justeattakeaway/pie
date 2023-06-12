import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChatHeart = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chat-heart", className, iconSize, "IconChatHeart");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8 9.75 5.926 7.589a1.347 1.347 0 0 1 0-1.838 1.199 1.199 0 0 1 .875-.376c.329.002.644.134.875.367L8 6.058l.324-.307a1.225 1.225 0 0 1 1.75 0 1.365 1.365 0 0 1 0 1.846L8 9.75Z" /><path d="M3.538 14.781H2.094V4.5a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 4.5v6.125a1.54 1.54 0 0 1-1.531 1.531H6.25a.254.254 0 0 0-.157.061l-2.555 2.564Zm.087-10.5a.219.219 0 0 0-.219.219v8.557l1.75-1.75a1.522 1.522 0 0 1 1.094-.463h6.125a.219.219 0 0 0 .219-.219V4.5a.219.219 0 0 0-.219-.219h-8.75Z" /></svg>;
};
export default IconChatHeart;