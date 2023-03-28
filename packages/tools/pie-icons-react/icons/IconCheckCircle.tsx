import * as React from "react";
import { SVGProps } from "react";
const IconCheckCircle = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--check-circle" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.495 8a5.487 5.487 0 1 1-1.75-3.99l.875-.962a6.764 6.764 0 1 0 1.759 2.616l-1.032 1.12c.098.398.148.806.148 1.216Z" /><path fill="#242E30" d="M8.061 10.625a1.215 1.215 0 0 1-.875-.385L4.99 7.781l.98-.875 2.118 2.38 5.416-5.888.963.875-5.522 5.95a1.181 1.181 0 0 1-.875.384l-.009.018Z" /></svg>;
};
export default IconCheckCircle;