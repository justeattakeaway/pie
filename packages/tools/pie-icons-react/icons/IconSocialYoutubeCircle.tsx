import * as React from "react";
import { SVGProps } from "react";
const IconSocialYoutubeCircle = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--youtube-circle" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><g fill="#242E30" clipPath="url(#prefix__clip0_889_625)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z" /><path fillRule="evenodd" d="M10.344 6.128a.76.76 0 0 1 .53.543C11 7.15 11 8.148 11 8.148s0 1-.125 1.478a.76.76 0 0 1-.53.543c-.469.128-2.345.128-2.345.128s-1.876 0-2.344-.128a.76.76 0 0 1-.53-.543C5 9.147 5 8.148 5 8.148s0-.998.125-1.477a.76.76 0 0 1 .53-.543C6.125 6 8 6 8 6s1.876 0 2.344.128Zm-1.39 2.174-1.568.907V7.395l1.569.907Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_889_625"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialYoutubeCircle;