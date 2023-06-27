import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFire = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--fire", className, size, "IconFire");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path fillRule="evenodd" d="M8.24 2.56 5.082 5.72l-.002.002a4.477 4.477 0 0 0-.004 6.302 4.364 4.364 0 0 0 6.278.002 4.459 4.459 0 0 0-.003-6.304L8.24 2.56Zm-2.518 8.833-.11.107.109-.108.001.001Zm.666-.194a2.864 2.864 0 0 0 3.669-.013 256.57 256.57 0 0 0-1.833-1.817L6.388 11.2Zm4.366.24.064.061-.063-.062v.001Zm.197-1.481a256.172 256.172 0 0 0-2.208-2.18l-.53-.516-2.722 2.713a2.977 2.977 0 0 1 .652-3.196L8.233 4.69l2.05 2.086.006.005a2.961 2.961 0 0 1 .663 3.177Z" clipRule="evenodd" /></svg>;
};
export default IconFire;