import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSettingsFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--settings-filled-large", className, size, "IconSettingsFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M25.564 16.044v-.097a3.412 3.412 0 0 1 .875-2.423l1.409-1.453-2.529-4.375-2.012.517a3.5 3.5 0 0 1-2.582-.455 3.43 3.43 0 0 1-1.654-1.987L18.53 3.75h-5.057l-.57 2.004a3.5 3.5 0 0 1-1.68 2.004 3.5 3.5 0 0 1-2.554.437l-2.013-.516-2.529 4.375 1.374 1.47c.597.662.912 1.532.875 2.424v.104a3.412 3.412 0 0 1-.875 2.424L4.126 19.93l2.53 4.375 2.012-.516a3.5 3.5 0 0 1 2.625.454 3.43 3.43 0 0 1 1.654 1.987l.525 2.021h5.057l.569-2.004a3.78 3.78 0 0 1 4.235-2.441l2.012.516 2.529-4.375-1.374-1.47a3.421 3.421 0 0 1-.936-2.432ZM19.063 16a3.028 3.028 0 0 1-.875 2.17 3.132 3.132 0 0 1-4.323 0 3.063 3.063 0 1 1 5.25-2.17h-.052Z" /></svg>;
};
export default IconSettingsFilledLarge;