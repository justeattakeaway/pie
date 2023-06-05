import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUnlink = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--unlink", className, iconSize, "IconUnlink");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M5.48 11.719h1.645v1.312H5.48a4.445 4.445 0 0 1-4.261-4.594A4.813 4.813 0 0 1 2.444 5.21 4.121 4.121 0 0 1 5.48 3.844h1.645v1.312H5.48a2.791 2.791 0 0 0-2.065.945 3.448 3.448 0 0 0-.875 2.337 3.132 3.132 0 0 0 2.94 3.28Zm5.04-7.875H8.875v1.312h1.645a3.133 3.133 0 0 1 2.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 0 1-2.065.945H8.875v1.312h1.645a4.12 4.12 0 0 0 3.036-1.365 4.812 4.812 0 0 0 1.225-3.229 4.445 4.445 0 0 0-4.261-4.593Zm-.306 5.906L8.927 8.437l1.287-1.312-.928-.875L8 7.51 6.714 6.25l-.928.875 1.286 1.313L5.786 9.75l.928.875L8 9.365l1.286 1.26.928-.875Z" /></svg>;
};
export default IconUnlink;