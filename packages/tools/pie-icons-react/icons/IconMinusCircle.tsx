import * as React from "react";
import { SVGProps } from "react";
const IconMinusCircle = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--minus-circle" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M4.596 7.344v1.312h6.808V7.344H4.596Z" /><path fill="#242E30" d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.792 6.792 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z" /></svg>;
};
export default IconMinusCircle;