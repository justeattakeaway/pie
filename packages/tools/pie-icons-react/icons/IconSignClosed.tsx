import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSignClosed = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--sign-closed", className, iconSize, "IconSignClosed");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.25 4.719h-2.126L8.507 1.464H7.494L4.867 4.719H2.75A1.54 1.54 0 0 0 1.219 6.25v5.25a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V6.25a1.54 1.54 0 0 0-1.531-1.531ZM8 2.969l1.444 1.75H6.556L8 2.969Zm5.469 8.531a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219V6.25a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v5.25Zm-3.5-3.692L8.928 8.874l1.076 1.068-.936.936L8 9.803l-1.067 1.076-.937-.936 1.076-1.068-1.076-1.067.936-.937L8 7.947l1.068-1.076.9.936Z" /></svg>;
};
export default IconSignClosed;