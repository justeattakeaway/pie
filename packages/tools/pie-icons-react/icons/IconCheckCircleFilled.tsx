import * as React from "react";
import { SVGProps } from "react";
const IconCheckCircleFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--check-circle-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m13.985 4.815-5.04 5.425a1.181 1.181 0 0 1-1.352.282 1.216 1.216 0 0 1-.398-.282L4.99 7.781l.98-.875 2.117 2.38 5.163-5.591a6.737 6.737 0 1 0 .752 1.12h-.017Z" /></svg>;
};
export default IconCheckCircleFilled;