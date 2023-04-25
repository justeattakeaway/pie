import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconRestaurantLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--restaurant-large", className, iconSize, "IconRestaurantLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"    {...allProps}><g fill="#242E30" fillRule="evenodd" clipPath="url(#prefix__clip0_2_2344)" clipRule="evenodd"><path d="M24.75 23.875H16v-7h8.75v7ZM23 18.625h-5.25v3.5H23v-3.5Z" /><path d="m26.806 4.52 1.934 1.934A4.261 4.261 0 0 1 30 9.49v.175a4.612 4.612 0 0 1-1.75 3.631V28.25H3.75V13.235a2.74 2.74 0 0 0-.142-.11 1.806 1.806 0 0 1-.208-.17A4.664 4.664 0 0 1 2 9.656v-.148a4.305 4.305 0 0 1 1.277-3.054l1.97-1.951a2.625 2.625 0 0 1 1.846-.753H24.95c.696 0 1.363.278 1.855.77ZM9 21.25v5.25h3.5v-5.25a1.75 1.75 0 0 0-3.5 0Zm5.25 5.25H26.5V14.154c-.144.04-.29.072-.438.096a4.497 4.497 0 0 1-3.727-1.33 4.48 4.48 0 0 1-6.335 0 4.48 4.48 0 0 1-6.352 0 4.377 4.377 0 0 1-3.08 1.33c-.36-.01-.719-.06-1.068-.149V26.5h1.75v-5.25a3.5 3.5 0 0 1 7 0v5.25Zm13.332-14.969c.44-.52.678-1.184.668-1.866V9.49a2.52 2.52 0 0 0-.744-1.794l-1.942-1.942a.875.875 0 0 0-.613-.254H7.093a.875.875 0 0 0-.613.254L4.511 7.696a2.564 2.564 0 0 0-.761 1.812v.148a2.879 2.879 0 0 0 .875 2.048 2.626 2.626 0 0 0 1.916.796 2.817 2.817 0 0 0 2.38-1.444l.263-.411h.989l.253.438a2.738 2.738 0 0 0 4.804 0l.245-.447h1.05l.254.464a2.74 2.74 0 0 0 4.786 0l.254-.446h1.024l.262.437a2.783 2.783 0 0 0 2.747 1.409 2.826 2.826 0 0 0 1.73-.969Z" /></g><defs><clipPath id="prefix__clip0_2_2344"><rect width={28} height={28} fill="#fff" transform="translate(2 2)" /></clipPath></defs></svg>;
};
export default IconRestaurantLarge;