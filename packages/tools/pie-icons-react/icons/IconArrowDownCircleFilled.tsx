import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconArrowDownCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--arrow-down-circle-filled", className, size, "IconArrowDownCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M8.656 1.254v7.49l1.899-1.899.945.927-2.712 2.713a1.084 1.084 0 0 1-1.54 0L4.5 7.772l.945-.927 1.899 1.899v-7.49a6.781 6.781 0 1 0 1.312 0Z" /></svg>;
};
export default IconArrowDownCircleFilled;