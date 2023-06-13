import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialLinkedinStaticLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--linkedin-static-large", className, iconSize, "IconSocialLinkedinStaticLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path fill="#069" d="M4 5.72C4 4.77 4.794 4 5.774 4h20.452C27.206 4 28 4.77 28 5.72v20.56c0 .95-.794 1.72-1.774 1.72H5.774C4.794 28 4 27.23 4 26.28V5.72Z" /><path fill="#fff" fillRule="evenodd" d="M11.274 24.09V13.253H7.65V24.09h3.625ZM9.462 11.774c1.264 0 2.05-.833 2.05-1.873-.023-1.063-.786-1.872-2.026-1.872-1.24 0-2.05.809-2.05 1.872 0 1.04.786 1.873 2.002 1.873h.024Z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M13.28 24.09h3.625v-6.052c0-.323.024-.647.12-.878.262-.648.858-1.318 1.86-1.318 1.311 0 1.836.994 1.836 2.45v5.798h3.625v-6.213c0-3.33-1.789-4.878-4.174-4.878-1.955 0-2.814 1.086-3.29 1.826h.023v-1.572H13.28c.048 1.017 0 10.837 0 10.837Z" clipRule="evenodd" /></svg>;
};
export default IconSocialLinkedinStaticLarge;