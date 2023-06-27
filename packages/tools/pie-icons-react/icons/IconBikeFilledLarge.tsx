import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBikeFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--bike-filled-large", className, size, "IconBikeFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><g clipPath="url(#prefix__clip0_1380_970)"><path d="M21.661 8.125a.875.875 0 0 1 .534-1.068l.875-.306v-1.89l-1.444.534a2.625 2.625 0 0 0-1.61 3.185l.359 1.295h-.201a3.5 3.5 0 0 0-3.002 1.697L14.47 16l-1.566-5.25h1.347V9H8.449L9 10.75h2.039l1.54 5.162a5.687 5.687 0 1 0 1.671 4.025 4.77 4.77 0 0 0 0-.498c-.49.449-1.097.752-1.75.875-.188.03-.378.048-.569.052L9 20.323l-.586-1.75h3.5c.112-.006.223-.02.332-.044a1.75 1.75 0 0 0 .971-.56 1.7 1.7 0 0 0 .193-.245l.236-.385c.182.366.325.75.429 1.146.086.312.145.631.175.954a3.29 3.29 0 0 0 .674-.797l3.701-6.142a1.75 1.75 0 0 1 1.505-.875h.709l.927 3.246a5.68 5.68 0 0 1 1.672-.542L21.66 8.125Z" /><path d="M24.347 14.25a5.94 5.94 0 0 0-.875.079l.49 1.75c.088.288 1.252 4.331 1.252 4.331h-1.838l-1.094-3.78-.498-1.75a5.67 5.67 0 1 0 2.563-.63Z" /><path d="M7.285 10.75 6.699 9h-4.41l.586 1.75h4.41Z" /><path d="M5.229 13.375h2.93l-.585-1.75h-2.94l.595 1.75Z" /></g><defs><clipPath id="prefix__clip0_1380_970"><rect width={28} height={28} transform="translate(2 2)" /></clipPath></defs></svg>;
};
export default IconBikeFilledLarge;