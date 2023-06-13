import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconVegetarianLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--vegetarian-large", className, iconSize, "IconVegetarianLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m23.166 3.146-.428-.761-.762.438c-.463.262-11.375 6.562-13.125 12.923a9.87 9.87 0 0 0 .945 7.508c.612 1.06 1.413 2 2.363 2.773a10.754 10.754 0 0 1-7.28.692l-.438 1.697c1.027.26 2.082.393 3.141.394a12.574 12.574 0 0 0 6.248-1.68 9.724 9.724 0 0 0 1.951.761 9.994 9.994 0 0 0 2.625.359 9.905 9.905 0 0 0 9.52-7.28c1.707-6.361-4.497-17.36-4.76-17.824Zm3.037 17.36A8.146 8.146 0 0 1 16.2 26.203l-.735-.237c.34-.273.664-.565.972-.875l.253-.114.053-.183a12.477 12.477 0 0 0 2.975-5.469l.639-2.537-1.733-.438-.639 2.537c-.153.6-.358 1.186-.612 1.75a5.932 5.932 0 0 0-2.424-3.202l-.971 1.461a4.015 4.015 0 0 1 1.802 2.625 2.921 2.921 0 0 1-.525 2.258c-.467.48-.98.913-1.531 1.295a8.111 8.111 0 0 1-3.22-8.873c1.313-4.76 9.074-9.826 11.568-11.401 1.364 2.59 5.442 10.938 4.13 15.706Z" /></svg>;
};
export default IconVegetarianLarge;