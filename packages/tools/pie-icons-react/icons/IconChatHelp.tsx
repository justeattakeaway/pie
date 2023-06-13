import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChatHelp = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--chat-help", className, iconSize, "IconChatHelp");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M3.538 14.781H2.094V4.5a1.54 1.54 0 0 1 1.531-1.531h8.75A1.54 1.54 0 0 1 13.906 4.5v6.125a1.54 1.54 0 0 1-1.531 1.531H6.25a.254.254 0 0 0-.157.061l-2.555 2.564Zm.087-10.5a.219.219 0 0 0-.219.219v8.557l1.75-1.75a1.522 1.522 0 0 1 1.094-.463h6.125a.219.219 0 0 0 .219-.219V4.5a.219.219 0 0 0-.219-.219h-8.75Z" /><path d="M8.07 8.464a.647.647 0 1 0 0 1.295.647.647 0 0 0 0-1.295Z" /><path d="M8.07 5.305a1.514 1.514 0 0 0-1.094.429l-.131.14.709.708.131-.122a.56.56 0 0 1 .368-.131c.192 0 .306.096.306.245 0 .288-.341.429-.674.472h-.184l.088 1.216h.875l.052-.472a1.391 1.391 0 0 0 .963-1.286A1.251 1.251 0 0 0 8.07 5.305Z" /></svg>;
};
export default IconChatHelp;