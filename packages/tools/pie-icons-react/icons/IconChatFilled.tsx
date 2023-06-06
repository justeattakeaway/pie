import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChatFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chat-filled", className, iconSize, "IconChatFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.375 2.969h-8.75A1.54 1.54 0 0 0 2.094 4.5v10.281h1.444l2.555-2.564c.043-.037.099-.059.157-.06h6.125a1.54 1.54 0 0 0 1.531-1.532V4.5a1.54 1.54 0 0 0-1.531-1.531Z" /></svg>;
};
export default IconChatFilled;