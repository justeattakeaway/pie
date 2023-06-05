import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLaw = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--law", className, iconSize, "IconLaw");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_6703_3640)"><path fillRule="evenodd" d="m9.247 8.634-.45.451.935.936 4-3.999-.937-.936-.455.455L9.899 3.1l.455-.455-.937-.936-3.99 3.99.937.936.455-.455.743.744-5.827 5.836.936.936L8.49 7.877l.757.757Zm-1.5-3.382 2.44 2.442 1.217-1.217-2.442-2.44-1.216 1.215Z" clipRule="evenodd" /><path d="M8.035 11.929h5.574l-.35-1.322H8.385l-.35 1.322Z" /><path d="M13.845 12.813H7.8l-.35 1.32h6.746l-.35-1.32Z" /></g><defs><clipPath id="prefix__clip0_6703_3640"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconLaw;