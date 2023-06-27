import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCalendarRepeat = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--calendar-repeat", className, size, "IconCalendarRepeat");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 0 0 3.281-3.281V2.969h-2.625Zm1.313 7.656a1.969 1.969 0 0 1-1.969 1.969H3.406V4.28h9.188v6.344Zm-7.42-3.43L4.22 6.74l2.783-1.549.323 3.045-.971-.464c-.08.213-.115.439-.105.665a1.75 1.75 0 1 0 2.249-1.75L8.84 5.42a3.097 3.097 0 1 1-3.64 1.75l-.026.026Z" /></svg>;
};
export default IconCalendarRepeat;