import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconLaptopErrorLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--laptop-error-large", className, iconSize, "IconLaptopErrorLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m18.817 8.449-2.835 2.8-2.8-2.8-1.233 1.233 2.817 2.81-2.817 2.825 1.233 1.234 2.835-2.8 2.8 2.8 1.234-1.233-2.817-2.818 2.817-2.818-1.233-1.233Z" /><path fill="#242E30" d="M26.5 19.264V7.25a2.625 2.625 0 0 0-2.625-2.625H8.125A2.625 2.625 0 0 0 5.5 7.25v12.014L2 25.389v.236a2.625 2.625 0 0 0 2.625 2.625h22.75A2.625 2.625 0 0 0 30 25.625v-.236l-3.5-6.125ZM7.25 7.25a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875v11.375H7.25V7.25ZM27.375 26.5h-8.207l-.657-.875H13.49l-.657.875H4.625a.875.875 0 0 1-.875-.683l3.133-5.442h18.235l3.132 5.442a.875.875 0 0 1-.875.683Z" /><path fill="#242E30" d="M17.75 22.125h-3.5v1.75h3.5v-1.75Z" /><path fill="#242E30" d="M23 22.125h-3.5v1.75H23v-1.75Z" /><path fill="#242E30" d="M12.5 22.125H9v1.75h3.5v-1.75Z" /></svg>;
};
export default IconLaptopErrorLarge;