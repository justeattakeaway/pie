import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconWrap = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--wrap", className, size, "IconWrap");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M14.947 4.693a1.794 1.794 0 0 0-1.154-1.584 1.75 1.75 0 0 0-.98-1.759A1.75 1.75 0 0 0 11 1.604a1.75 1.75 0 0 0-1.181-.525 1.654 1.654 0 0 0-1.636 1.19c-.07.157-.131.317-.184.481L1.263 9.339a.665.665 0 0 0-.184.516.061.061 0 0 0 0 .044c.254 3.202 1.837 5.005 4.462 5.057a.647.647 0 0 0 .438-.175L13.1 8.28c.262-.075.507-.203.718-.376a1.53 1.53 0 0 0 .568-1.269 1.672 1.672 0 0 0-.14-.516 1.75 1.75 0 0 0 .7-1.426Zm-7.183.148v1.077c.052 1.295.087 2.143-.875 3.106-1.216 1.19-2.958.875-3.99.56L7.764 4.84Zm-2.45 8.803c-1.479-.123-2.406-1.068-2.774-2.8.68.227 1.392.348 2.109.359A4.374 4.374 0 0 0 7.808 9.96a3.981 3.981 0 0 0 1.294-2.791 6.248 6.248 0 0 0 2.136 1.059l-5.924 5.416Zm7.796-8.435a.665.665 0 0 0-.56.499.647.647 0 0 0 .28.7c.088.06.262.236.262.332 0 .096 0 .105-.14.193-.332.18-.722.22-1.085.113a4.533 4.533 0 0 1-2.79-1.828 7.21 7.21 0 0 1 .35-2.538c.104-.306.27-.289.332-.297a.551.551 0 0 1 .472.428.675.675 0 0 0 .534.508.647.647 0 0 0 .665-.298s.438-.656.875-.472c.438.184.14.875.14.875a.648.648 0 0 0 .3.778c.088.05.186.08.286.088.446 0 .613.263.621.473.01.21-.2.402-.542.446Z" /></svg>;
};
export default IconWrap;