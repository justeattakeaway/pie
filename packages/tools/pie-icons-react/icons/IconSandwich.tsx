import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSandwich = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--sandwich", className, iconSize, "IconSandwich");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.906 5.375a3.15 3.15 0 0 0-3.001-3.281c-.494.001-.98.13-1.409.376a2.844 2.844 0 0 0-2.896.061 2.774 2.774 0 0 0-1.505-.437 3.15 3.15 0 0 0-3.001 3.281v1.531h11.812V5.375Zm-1.312.219H3.406v-.219a1.846 1.846 0 0 1 1.689-1.969c.393 0 .77.155 1.05.429l.455.438.455-.438a1.496 1.496 0 0 1 2.012-.061l.42.367.43-.367c.276-.234.626-.364.988-.368a1.846 1.846 0 0 1 1.689 1.969v.219Zm1.82 1.75v1.312c-.832 0-.875.123-.945.289a1.513 1.513 0 0 1-1.234 1.05 1.95 1.95 0 0 1-1.803-.464c-.227-.175-.323-.245-.525-.245h-.096v.062a1.75 1.75 0 0 1-1.794.874 1.75 1.75 0 0 1-1.75-.874.49.49 0 0 0 0-.07h-.175c-.2 0-.297.07-.525.245a1.934 1.934 0 0 1-1.802.463 1.514 1.514 0 0 1-1.234-1.05c-.07-.166-.114-.288-.945-.288V7.344c1.435 0 1.89.429 2.161 1.129.08.192.08.192.298.245.219.052.446 0 .709-.22.372-.32.847-.496 1.338-.498a1.295 1.295 0 0 1 1.252.726c.087.167.14.245.656.245s.569-.078.665-.245A1.269 1.269 0 0 1 9.907 8c.495.009.97.195 1.34.525.262.21.367.289.708.219.341-.07.219-.053.297-.245.272-.726.727-1.155 2.162-1.155Zm-1.82 3.281h1.312v.875a1.54 1.54 0 0 1-1.531 1.531h-8.75A1.54 1.54 0 0 1 2.094 11.5v-.875h1.312v.875a.219.219 0 0 0 .219.219h8.75a.22.22 0 0 0 .219-.219v-.875Z" /></svg>;
};
export default IconSandwich;