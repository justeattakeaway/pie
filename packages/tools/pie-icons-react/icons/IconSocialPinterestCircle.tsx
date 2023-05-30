import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialPinterestCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--pinterest-circle", className, iconSize, "IconSocialPinterestCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_1611_693)"><path fill="#242E30" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25a5.25 5.25 0 0 1-1.671-.263c.294-.408.516-.863.656-1.347.114-.394.219-.796.324-1.19a.992.992 0 0 1 0-.131c.052.061.078.114.122.157l.123.114a1.794 1.794 0 0 0 1.46.367 2.817 2.817 0 0 0 2.092-1.382c.4-.625.618-1.35.63-2.091a3.334 3.334 0 0 0-2.249-3.325 4.314 4.314 0 0 0-2.03-.193 3.64 3.64 0 0 0-2.415 1.234 3.369 3.369 0 0 0-.437 3.71c.169.37.45.676.805.875.131.061.175 0 .21-.096.035-.097.114-.412.157-.622a.28.28 0 0 0-.052-.2 2.476 2.476 0 0 1 .525-3.343 2.739 2.739 0 0 1 2.476-.464 2.153 2.153 0 0 1 1.453 1.19c.19.416.268.874.227 1.33a3.168 3.168 0 0 1-.499 1.671 1.593 1.593 0 0 1-1.295.788.874.874 0 0 1-.875-1.112c.114-.402.237-.787.35-1.19a2.52 2.52 0 0 0 .114-.875.735.735 0 0 0-1.076-.62 1.164 1.164 0 0 0-.63.708c-.167.458-.167.96 0 1.417a.534.534 0 0 1 0 .237c-.219.936-.446 1.872-.656 2.817-.07.45-.07.907 0 1.357a5.469 5.469 0 1 1 2.16.472Z" /></g><defs><clipPath id="prefix__clip0_1611_693"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialPinterestCircle;