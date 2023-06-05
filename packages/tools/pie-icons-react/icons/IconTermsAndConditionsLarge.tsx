import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconTermsAndConditionsLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--terms-and-conditions-large", className, iconSize, "IconTermsAndConditionsLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M10.872 10.75h8.26v1.75h-8.26v-1.75Z" /><path fill="#242E30" d="M10.872 15.125h4.13v1.75h-4.13v-1.75Z" /><path fill="#242E30" d="m20.235 21.381.813.893 2.748-2.896 1.269 1.207-3.02 3.185a1.39 1.39 0 0 1-.997.429h-.008c-.385 0-.753-.167-1.007-.447l-1.085-1.19 1.287-1.18Z" /><path fill="#242E30" fillRule="evenodd" d="M27.917 19.483c0-.98-.551-1.873-1.426-2.328l-.875-.446V4.59H4.634v22.82h13.562c.04 0 .081-.002.12-.005a1.84 1.84 0 0 1 .108-.004c.245.175.498.341.778.49l2.581 1.094 2.617-1.059a6.723 6.723 0 0 0 2.704-2.555c.454-.77.726-1.697.822-2.782v-3.106h-.009Zm-12.171 3.526c.157 1.006.49 1.89.989 2.651H6.384V6.34h17.482v9.476l-1.969-1.006-4.733 2.257a2.643 2.643 0 0 0-1.497 2.372v2.957l.088.621-.009-.008Zm9.844 1.47c-.473.805-1.164 1.461-1.925 1.855l-1.873.752-.665-.28-1.172-.49a5.231 5.231 0 0 1-.989-.708 5.11 5.11 0 0 1-.656-.718c-.429-.578-.709-1.295-.831-2.135l-.062-.42v-2.896c0-.333.193-.648.499-.788l3.955-1.881 1.995 1.024 1.75.901.079.044a.872.872 0 0 1 .472.778v2.976c-.052.796-.245 1.478-.569 2.012l-.008-.026Z" clipRule="evenodd" /></svg>;
};
export default IconTermsAndConditionsLarge;