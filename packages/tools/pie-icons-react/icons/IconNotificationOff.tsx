import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconNotificationOff = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--notification-off", className, iconSize, "IconNotificationOff");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m13.906 10.459-.402-.403a4.567 4.567 0 0 1-1.348-3.246v-.455a4.182 4.182 0 0 0-1.365-3.08 4.121 4.121 0 0 0-2.135-.998V1.105H7.344v1.172c-.58.098-1.13.326-1.61.665l-.91-1.505H3.3L4.754 3.87a4.375 4.375 0 0 0-.875 2.625v.289A4.568 4.568 0 0 1 2.53 10.03l-.402.402v1.803h3.054a2.817 2.817 0 0 0 5.293 1.138l.7 1.163H12.7l-1.374-2.275h2.581V10.46ZM8 13.574a1.531 1.531 0 0 1-1.514-1.313h3.028A1.531 1.531 0 0 1 8 13.574Zm-2.144-2.625H3.46A5.871 5.871 0 0 0 5.156 6.81v-.289a3.08 3.08 0 0 1 .35-1.409l3.5 5.837h-3.15Zm4.83 0h-.148l-4.14-6.895a2.747 2.747 0 0 1 1.313-.525 2.844 2.844 0 0 1 3.133 2.826v.455a5.871 5.871 0 0 0 1.697 4.139h-1.855Z" /></svg>;
};
export default IconNotificationOff;