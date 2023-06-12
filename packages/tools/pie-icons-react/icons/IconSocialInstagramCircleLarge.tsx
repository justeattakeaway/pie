import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialInstagramCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--instagram-circle-large", className, iconSize, "IconSocialInstagramCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M16.25 4a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Z" /><path d="M11.257 11.258c.335-.335.669-.54 1.064-.693.38-.15.817-.252 1.458-.278.64-.03.844-.037 2.473-.037 1.63 0 1.835.007 2.474.037.639.029 1.075.129 1.456.278.395.153.729.358 1.063.693.332.331.537.668.69 1.06.147.381.25.818.278 1.457.03.64.037.844.037 2.474 0 1.63-.007 1.834-.037 2.474-.029.639-.129 1.075-.278 1.456-.153.395-.358.73-.692 1.064-.334.334-.669.539-1.064.692-.38.147-.817.25-1.456.278-.639.03-.844.037-2.473.037-1.63 0-1.834-.007-2.473-.037-.64-.029-1.076-.129-1.456-.278a2.943 2.943 0 0 1-1.064-.692 2.944 2.944 0 0 1-.692-1.064c-.147-.38-.25-.817-.278-1.456-.03-.64-.037-.845-.037-2.474 0-1.63.007-1.835.037-2.474.029-.639.129-1.076.278-1.456.153-.393.358-.73.692-1.062Z" /><path d="M13.17 16.251a3.08 3.08 0 1 0 6.161 0 3.08 3.08 0 0 0-6.162 0Zm5.08 0a2 2 0 1 1-4 .001 2 2 0 0 1 4-.001Z" /><path d="M19.454 13.767a.72.72 0 1 0 0-1.438.72.72 0 0 0 0 1.438Z" /></svg>;
};
export default IconSocialInstagramCircleLarge;