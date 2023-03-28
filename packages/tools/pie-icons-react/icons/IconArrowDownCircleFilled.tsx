import * as React from "react";
import { SVGProps } from "react";
const IconArrowDownCircleFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--arrow-down-circle-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8.656 1.254v7.49l1.899-1.899.945.927-2.712 2.713a1.084 1.084 0 0 1-1.54 0L4.5 7.772l.945-.927 1.899 1.899v-7.49a6.781 6.781 0 1 0 1.312 0Z" /></svg>;
};
export default IconArrowDownCircleFilled;