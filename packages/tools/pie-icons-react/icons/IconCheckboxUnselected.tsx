import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCheckboxUnselected = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--checkbox-unselected", className, size, "IconCheckboxUnselected");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M12.375 13.906h-8.75c-.84 0-1.531-.691-1.531-1.531v-8.75c0-.84.691-1.531 1.531-1.531h8.75c.84 0 1.531.691 1.531 1.531v8.75c0 .84-.691 1.531-1.531 1.531Zm-8.75-10.5a.217.217 0 0 0-.219.219v8.75c0 .123.096.219.219.219h8.75a.217.217 0 0 0 .219-.219v-8.75a.217.217 0 0 0-.219-.219h-8.75Z" /></svg>;
};
export default IconCheckboxUnselected;