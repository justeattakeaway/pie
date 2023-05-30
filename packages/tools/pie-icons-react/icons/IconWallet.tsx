import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconWallet = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--wallet", className, iconSize, "IconWallet");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_4814_3596)"><path fill="#242E30" fillRule="evenodd" d="M8 2.75a.131.131 0 0 1 .079 0h.087a.201.201 0 0 1 .114.114l.096.227h1.418l-.298-.726a1.549 1.549 0 0 0-.875-.831 1.514 1.514 0 0 0-1.172 0l-3.693 1.54h3.43L8 2.75Zm4.857 8.584H12.2v1.584a.219.219 0 0 1-.218.218h-8.97a.219.219 0 0 1-.218-.218v-7a.219.219 0 0 1 .219-.22h8.969a.219.219 0 0 1 .218.22v1.478h1.313V5.918a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.531 1.531 0 0 0-1.426.989c-.065.17-.1.351-.105.534v7a1.531 1.531 0 0 0 1.532 1.54h8.969a1.53 1.53 0 0 0 1.53-1.531v-1.584h-.655Zm.612-2.625h.901v1.312h-3.036V8.71H13.469Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_4814_3596"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconWallet;