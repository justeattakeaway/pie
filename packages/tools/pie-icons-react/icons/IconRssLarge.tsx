import * as React from "react";
import { SVGProps } from "react";
const IconRssLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--rss-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8.762 21.355a1.312 1.312 0 1 0 1.853 1.86 1.312 1.312 0 0 0-1.853-1.86Z" /><path fill="#242E30" d="M8.5 7v1.5a15 15 0 0 1 15 15H25A16.5 16.5 0 0 0 8.5 7Z" /><path fill="#242E30" d="M9.25 11.807v1.5a9.458 9.458 0 0 1 9.442 9.443h1.5A10.957 10.957 0 0 0 9.25 11.807Z" /><path fill="#242E30" d="M10 16.615v1.5A3.893 3.893 0 0 1 13.885 22h1.5A5.393 5.393 0 0 0 10 16.615Z" /></svg>;
};
export default IconRssLarge;