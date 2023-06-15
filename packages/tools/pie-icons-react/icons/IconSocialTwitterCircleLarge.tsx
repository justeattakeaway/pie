import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialTwitterCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--twitter-circle-large", className, iconSize, "IconSocialTwitterCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.984 21.835a8.34 8.34 0 0 1-3.224.622l-.07-.052a8.365 8.365 0 0 1-4.532-1.321 5.889 5.889 0 0 0 4.375-1.225 2.949 2.949 0 0 1-2.756-2.048c.181.035.366.053.55.053.264.001.526-.034.78-.105a2.957 2.957 0 0 1-2.363-2.896c.408.225.864.351 1.33.367a2.958 2.958 0 0 1-.875-3.946 8.347 8.347 0 0 0 6.125 3.088 2.949 2.949 0 0 1 4.053-3.374c.373.163.709.4.987.697a5.784 5.784 0 0 0 1.872-.718 2.984 2.984 0 0 1-1.294 1.637 5.748 5.748 0 0 0 1.688-.464 6.124 6.124 0 0 1-1.47 1.531v.377a8.337 8.337 0 0 1-5.176 7.777Z" /><path fillRule="evenodd" d="M9.194 26.186a12.25 12.25 0 1 0 13.612-20.37 12.25 12.25 0 0 0-13.612 20.37Zm.972-18.916a10.5 10.5 0 1 1 11.667 17.46A10.5 10.5 0 0 1 10.167 7.27Z" clipRule="evenodd" /></svg>;
};
export default IconSocialTwitterCircleLarge;