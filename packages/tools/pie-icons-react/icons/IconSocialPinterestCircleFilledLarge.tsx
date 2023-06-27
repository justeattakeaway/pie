import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialPinterestCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--pinterest-circle-filled-large", className, size, "IconSocialPinterestCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm5.915 15.636a5.345 5.345 0 0 1-3.902 2.625 3.414 3.414 0 0 1-2.766-.682 1.946 1.946 0 0 1-.236-.228c-.07-.078-.131-.166-.227-.288 0 .105-.053.175-.07.245-.202.752-.385 1.505-.604 2.257a9.16 9.16 0 0 1-1.811 3.299c-.07.078-.123.157-.193.245l-.07-.079a11.426 11.426 0 0 1-.052-3.859c.393-1.75.831-3.543 1.242-5.32a.876.876 0 0 0 0-.446 3.963 3.963 0 0 1 0-2.695 2.135 2.135 0 0 1 1.234-1.356 1.384 1.384 0 0 1 1.899 1.146 4.377 4.377 0 0 1-.228 1.61c-.21.753-.446 1.496-.647 2.249a1.61 1.61 0 0 0 1.697 2.1 3.009 3.009 0 0 0 2.45-1.488 6.055 6.055 0 0 0 .954-3.167 4.952 4.952 0 0 0-.438-2.511 4.094 4.094 0 0 0-2.747-2.258 5.17 5.17 0 0 0-4.681.875 4.664 4.664 0 0 0-.989 6.265.621.621 0 0 1 .088.394c-.08.393-.184.787-.29 1.172-.104.385-.165.298-.393.175a3.614 3.614 0 0 1-1.531-1.584 6.37 6.37 0 0 1 .814-7 6.843 6.843 0 0 1 4.585-2.362 8.077 8.077 0 0 1 3.84.367 6.309 6.309 0 0 1 4.253 6.318 7.762 7.762 0 0 1-1.181 3.981Z" /></svg>;
};
export default IconSocialPinterestCircleFilledLarge;