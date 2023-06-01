import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconTargetLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--target-large", className, iconSize, "IconTargetLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M22.125 15.125a5.25 5.25 0 0 0-10.412-.875l-1.838.77a7 7 0 1 1 7.114 7.105l.761-1.837a5.25 5.25 0 0 0 4.375-5.163ZM16.875 3.75A11.375 11.375 0 0 0 5.5 15.125c.003.586.05 1.171.14 1.75l1.671-.726c-.037-.34-.058-.682-.06-1.024a9.625 9.625 0 1 1 9.624 9.625c-.324 0-.647 0-.971-.052l-.718 1.67c.559.089 1.124.133 1.69.132a11.375 11.375 0 1 0 0-22.75Zm1.251 11.322L12.5 28.075a.929.929 0 0 1-1.627.123L8.248 24.05a.761.761 0 0 0-.29-.289l-4.155-2.625A.875.875 0 0 1 3.95 19.5l12.924-5.635a.876.876 0 0 1 1.208 1.207h.043Zm-2.432 1.234L6.069 20.49l2.835 1.793c.335.213.619.497.831.832l1.75 2.817 4.209-9.625ZM4.879 23.254l-2.625 2.625 1.242 1.242 2.625-2.625-1.242-1.242Zm.875 4.375 1.242 1.242 1.75-1.75-1.242-1.242-1.75 1.75Z" /></svg>;
};
export default IconTargetLarge;