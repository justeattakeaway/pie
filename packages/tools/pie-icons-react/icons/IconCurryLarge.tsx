import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCurryLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--curry-large", className, iconSize, "IconCurryLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m30 5.903-1.523-.875-4.305 7.603a4.446 4.446 0 0 0-.577-.709 4.577 4.577 0 0 0-4.55-1.172 4.576 4.576 0 0 0-8.628 0 4.464 4.464 0 0 0-1.268-.193 4.594 4.594 0 0 0-4.524 3.693h-1.75v2.625a7.875 7.875 0 0 0 5.39 7.446l.508 2.179h14.454l.508-2.179a7.876 7.876 0 0 0 5.39-7.446V14.25H25.24L30 5.903Zm-20.851 6.43a2.8 2.8 0 0 1 1.444.412.875.875 0 0 0 .874 0 .875.875 0 0 0 .473-.7 2.826 2.826 0 0 1 5.635 0 .875.875 0 0 0 .473.7.875.875 0 0 0 .875 0A2.817 2.817 0 0 1 23 14.25H6.471a2.835 2.835 0 0 1 2.678-1.916Zm18.226 4.542a6.125 6.125 0 0 1-4.594 5.906l-.516.132-.429 1.837H10.164l-.429-1.837-.516-.132a6.125 6.125 0 0 1-4.594-5.906V16h22.75v.875Z" /></svg>;
};
export default IconCurryLarge;