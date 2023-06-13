import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPaymentPaypal = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--paypal", className, iconSize, "IconPaymentPaypal");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path fill="#253B80" fillRule="evenodd" d="m5.838 13.312.204-1.299-.454-.012H3.415l1.507-9.573a.135.135 0 0 1 .042-.075.11.11 0 0 1 .079-.029h3.662c1.215 0 2.056.254 2.493.753.204.233.337.479.4.75.066.283.066.62 0 1.032v.295l.2.117c.174.091.312.195.416.316.175.2.291.454.337.758.05.312.033.678-.05 1.098a3.949 3.949 0 0 1-.45 1.245 2.574 2.574 0 0 1-.711.782c-.27.192-.595.341-.962.433a4.816 4.816 0 0 1-1.198.137h-.288a.875.875 0 0 0-.557.204.873.873 0 0 0-.292.52l-.02.117-.362 2.285-.017.083c-.004.025-.013.038-.021.05-.008.008-.025.013-.037.013h-1.76.012Z" clipRule="evenodd" /><path fill="#179BD7" fillRule="evenodd" d="m12.002 4.917-.038.216C11.482 7.614 9.83 8.471 7.72 8.471H6.645a.523.523 0 0 0-.516.441l-.55 3.492-.153.99a.275.275 0 0 0 .27.317h1.907a.46.46 0 0 0 .453-.387l.021-.096.358-2.276.025-.125a.457.457 0 0 1 .454-.387H9.2c1.848 0 3.292-.75 3.716-2.922.175-.907.084-1.665-.383-2.197a1.798 1.798 0 0 0-.52-.404" clipRule="evenodd" /><path fill="#222D65" fillRule="evenodd" d="M11.494 4.717c-.075-.02-.15-.041-.229-.058a4.117 4.117 0 0 0-.241-.046 6.114 6.114 0 0 0-.95-.07h-2.87a.468.468 0 0 0-.2.045.453.453 0 0 0-.254.342L6.138 8.8l-.017.113a.523.523 0 0 1 .516-.442h1.074c2.11 0 3.762-.857 4.245-3.338l.038-.216a2.256 2.256 0 0 0-.396-.166.825.825 0 0 0-.108-.034" clipRule="evenodd" /><path fill="#253B80" fillRule="evenodd" d="M6.754 5.105a.453.453 0 0 1 .254-.341.468.468 0 0 1 .2-.046h2.871c.341 0 .658.02.949.07.083.013.162.03.241.046.08.017.154.038.23.059.037.012.074.02.107.033.142.046.275.104.396.166.146-.915 0-1.54-.495-2.106-.546-.62-1.532-.886-2.793-.886H5.047a.52.52 0 0 0-.516.441l-1.527 9.672a.313.313 0 0 0 .312.363h2.26L6.754 5.1v.004Z" clipRule="evenodd" /></svg>;
};
export default IconPaymentPaypal;