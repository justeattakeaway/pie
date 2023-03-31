import * as React from "react";
import { SVGProps } from "react";
const IconCaretUpLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--caret-up-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m26.229 22.125-8.96-14a1.68 1.68 0 0 0-2.844 0l-8.671 14a1.68 1.68 0 0 0 1.426 2.564h17.64a1.68 1.68 0 0 0 1.409-2.564ZM7.31 23 15.86 9.131l8.829 13.808L7.31 23Z" /></svg>;
};
export default IconCaretUpLarge;