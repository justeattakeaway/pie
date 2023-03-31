import * as React from "react";
import { SVGProps } from "react";
const IconCalendarStarLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--calendar-star-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M10.327 12.509h11.46l.873-1.746H9.454l.873 1.746Z" /><path fill="#242E30" d="M22.075 6.364V4.618h-1.746v1.746h-8.728V4.618H9.855v1.746H4.618v20.948h18.33a4.364 4.364 0 0 0 4.364-4.364V6.364h-5.237Zm3.491 16.584a2.618 2.618 0 0 1-2.618 2.618H6.364V8.11h3.491v.873h1.746V8.11h8.728v.873h1.746V8.11h3.491v14.838Z" /><path fill="#242E30" d="M21.071 17.938a.872.872 0 0 0-.698-.594l-2.479-.358-1.117-2.243a.873.873 0 0 0-1.563 0l-1.108 2.243-2.505.358a.872.872 0 0 0-.489 1.493l1.798 1.745-.419 2.47a.872.872 0 0 0 .34.873c.15.109.33.167.516.166a.976.976 0 0 0 .41-.096l2.208-1.187 2.217 1.17a.873.873 0 0 0 1.274-.926l-.419-2.47 1.79-1.745a.873.873 0 0 0 .244-.9Zm-3.561 1.745a.873.873 0 0 0-.245.768l.201 1.187-1.065-.558a.873.873 0 0 0-.811 0l-1.056.558.2-1.187a.872.872 0 0 0-.253-.768l-.873-.872 1.188-.175a.873.873 0 0 0 .654-.471l.515-1.065.524 1.073a.872.872 0 0 0 .663.472l1.178.174-.82.864Z" /></svg>;
};
export default IconCalendarStarLarge;