import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconReceiptSuccess = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--receipt-success", className, iconSize, "IconReceiptSuccess");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M10.713 3.249a.201.201 0 0 1-.175 0L8 2.102 5.463 3.25a.201.201 0 0 1-.176 0L2.094 1.805v12.39l3.193-1.444a.202.202 0 0 1 .176 0L8 13.898l2.537-1.147a.202.202 0 0 1 .175 0l3.194 1.444V1.805l-3.194 1.444Zm1.88 8.916-1.338-.604a1.506 1.506 0 0 0-1.26 0L8 12.463l-1.995-.875a1.488 1.488 0 0 0-1.26 0l-1.339.603V3.835l1.339.604a1.505 1.505 0 0 0 1.26 0L8 3.537l1.995.875a1.487 1.487 0 0 0 1.26 0l1.339-.603v8.356Z" /><path d="m11.019 6.547-.963-.953-2.905 2.905-1.207-1.217-.963.954 2.17 2.17 3.868-3.859Z" /></svg>;
};
export default IconReceiptSuccess;