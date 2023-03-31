import * as React from "react";
import { SVGProps } from "react";
const IconCheckboxUnselected = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--checkbox-unselected" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.375 13.906h-8.75c-.84 0-1.531-.691-1.531-1.531v-8.75c0-.84.691-1.531 1.531-1.531h8.75c.84 0 1.531.691 1.531 1.531v8.75c0 .84-.691 1.531-1.531 1.531Zm-8.75-10.5a.217.217 0 0 0-.219.219v8.75c0 .123.096.219.219.219h8.75a.217.217 0 0 0 .219-.219v-8.75a.217.217 0 0 0-.219-.219h-8.75Z" /></svg>;
};
export default IconCheckboxUnselected;