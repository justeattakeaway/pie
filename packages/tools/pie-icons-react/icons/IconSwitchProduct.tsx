import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSwitchProduct = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--switch-product", className, iconSize, "IconSwitchProduct");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M5.261 2.094H2.094V5.26H5.26V2.094Z" /><path fill="#242E30" d="M5.261 6.407H2.094v3.168H5.26V6.408Z" /><path fill="#242E30" d="M9.584 2.094H6.416V5.26h3.168V2.094Z" /><path fill="#242E30" d="M9.584 6.407H6.416v3.168h3.168V6.408Z" /><path fill="#242E30" d="M5.261 10.73H2.094v3.168H5.26V10.73Z" /><path fill="#242E30" d="M9.584 10.73H6.416v3.168h3.168V10.73Z" /><path fill="#242E30" d="M13.898 2.094H10.73V5.26h3.168V2.094Z" /><path fill="#242E30" d="M13.898 6.407H10.73v3.168h3.168V6.408Z" /><path fill="#242E30" d="M13.898 10.73H10.73v3.168h3.168V10.73Z" /></svg>;
};
export default IconSwitchProduct;