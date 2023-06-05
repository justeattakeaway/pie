import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUnlinkLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--unlink-large", className, iconSize, "IconUnlinkLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_18_765)"><path d="M12.377 21.25h-3.5A5.198 5.198 0 0 1 3.75 16a5.311 5.311 0 0 1 1.505-3.719 5.093 5.093 0 0 1 3.631-1.531h3.5L13.375 9H8.886a6.842 6.842 0 0 0-4.882 2.056A7.061 7.061 0 0 0 2 16a7 7 0 0 0 6.886 7h4.489l-.998-1.75Z" /><path d="M19.684 18.441 17.234 16l2.45-2.441-1.243-1.243L16 14.766l-2.441-2.45-1.243 1.243L14.766 16l-2.45 2.441 1.243 1.243L16 17.234l2.441 2.45 1.243-1.243Z" /><path d="M23.114 9h-4.008l.954 1.75h3.054A5.198 5.198 0 0 1 28.25 16a5.311 5.311 0 0 1-1.505 3.719 5.093 5.093 0 0 1-3.631 1.531H20.06L19.106 23h4.008a6.844 6.844 0 0 0 4.882-2.056A7.061 7.061 0 0 0 30 16a7 7 0 0 0-6.886-7Z" /></g><defs><clipPath id="prefix__clip0_18_765"><rect width={28} height={28} fill="#fff" transform="translate(2 2)" /></clipPath></defs></svg>;
};
export default IconUnlinkLarge;