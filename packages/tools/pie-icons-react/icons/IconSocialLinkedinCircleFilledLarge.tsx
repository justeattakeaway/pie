import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialLinkedinCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--linkedin-circle-filled-large", className, iconSize, "IconSocialLinkedinCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm-4.244 19.145H9.131c-.157 0-.218 0-.218-.21v-8.89c0-.157 0-.21.2-.201h2.696c.184 0 .21.061.21.219v8.811c-.027.21-.062.28-.263.271Zm.385-11.742a1.75 1.75 0 0 1-2.065 1.146 1.583 1.583 0 0 1-1.251-2.196A1.662 1.662 0 0 1 10.461 9a1.61 1.61 0 0 1 1.68 2.074Zm10.754 11.742H20.27c-.192 0-.245-.052-.245-.236v-4.681c.009-.345-.03-.69-.114-1.024a1.524 1.524 0 0 0-2.467-.761 1.854 1.854 0 0 0-.665 1.531v4.961c0 .193-.061.193-.21.193H13.9c-.158 0-.219 0-.219-.21v-8.864c0-.184 0-.236.219-.236h2.678c.157 0 .2.043.2.201v1.068l.106-.105a3.14 3.14 0 0 1 3.334-1.278 3.308 3.308 0 0 1 2.826 3.019c.055.397.084.797.087 1.199v5.013c0 .158-.044.219-.236.21Z" /></svg>;
};
export default IconSocialLinkedinCircleFilledLarge;