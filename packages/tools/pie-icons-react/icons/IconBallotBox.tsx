import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBallotBox = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--ballot-box", className, iconSize, "IconBallotBox");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M3.625 6.469V7.78h8.75V6.47h-1.094V3.625a2.406 2.406 0 0 0-2.406-2.406H4.719v5.25H3.625ZM6.031 2.53h2.844a1.094 1.094 0 0 1 1.094 1.094v2.844H6.03V2.53Zm8.75 1.313v8.312H1.22V3.844h2.406v1.312H2.531v5.688H13.47V5.156h-1.094V3.844h2.406Z" /></svg>;
};
export default IconBallotBox;