import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCookiePolicy = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--cookie-policy", className, iconSize, "IconCookiePolicy");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_5014_3343)"><path d="M8 14.563A6.565 6.565 0 0 1 1.437 8 6.565 6.565 0 0 1 8 1.437a6.7 6.7 0 0 1 1.321.132l.28 1.155a1.21 1.21 0 0 0-.464.945c0 .674.552 1.225 1.226 1.225h.07l.656.866a1.22 1.22 0 0 0-.079.411c0 .674.551 1.225 1.225 1.225.429 0 .814-.218 1.041-.586l1.208.245a6.565 6.565 0 0 1-6.492 7.508H8ZM8 2.75A5.254 5.254 0 0 0 2.75 8 5.254 5.254 0 0 0 8 13.25a5.254 5.254 0 0 0 5.224-4.742 2.54 2.54 0 0 1-3.526-2.336v-.053A2.536 2.536 0 0 1 7.99 2.74L8 2.75Z" /><path d="M5.839 7.37a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z" /><path d="M5.839 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z" /><path d="M9.426 11.106a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z" /><path d="M12.279 4.692a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61Z" /></g><defs><clipPath id="prefix__clip0_5014_3343"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconCookiePolicy;