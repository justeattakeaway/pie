import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconSocialLinkedinCircle = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--linkedin-circle", className, iconSize, "IconSocialLinkedinCircle");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g fill="#242E30" clipPath="url(#prefix__clip0_1611_785)"><path d="M5.808 4.772a.744.744 0 0 0-.363-.045.779.779 0 0 0-.77.464.744.744 0 0 0 .586 1.059.796.796 0 0 0 .989-.569.744.744 0 0 0-.442-.909Z" /><path d="m8.402 7.422.053-.052a1.479 1.479 0 0 1 1.557-.621 1.558 1.558 0 0 1 1.33 1.417c.013.187.013.374 0 .56v2.354c0 .088 0 .114-.113.114h-1.19c-.088 0-.114 0-.114-.114V8.884c.001-.166-.02-.33-.061-.49a.709.709 0 0 0-1.155-.35.875.875 0 0 0-.315.717v2.337c0 .087 0 .096-.105.096H7.055c-.079 0-.105 0-.105-.097V6.933c0-.078 0-.105.096-.105h1.269c.07 0 .096 0 .096.097l-.003.174c-.003.1-.006.218-.006.324Z" /><path d="M6.154 9.015v2.065c0 .088 0 .114-.114.114H4.806c-.079 0-.105 0-.105-.105V6.924c0-.07 0-.097.096-.097h1.27c.078 0 .095 0 .095.105-.008.692-.008 1.383-.008 2.083Z" /><path fillRule="evenodd" d="M8 1.081a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75ZM2.625 7.956a5.375 5.375 0 1 1 10.75 0 5.375 5.375 0 0 1-10.75 0Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_1611_785"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialLinkedinCircle;