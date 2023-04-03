import * as React from "react";
import { SVGProps } from "react";
const IconSettingsFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--settings-filled" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.338 8a1.636 1.636 0 0 1 .428-1.181l.875-.875-1.505-2.625-1.233.306a1.688 1.688 0 0 1-1.278-.236 1.645 1.645 0 0 1-.805-.963L9.505 1.22h-3.01l-.341 1.216a1.671 1.671 0 0 1-.779.962 1.68 1.68 0 0 1-1.277.228L2.88 3.31 1.376 5.935l.875.875c.287.328.434.755.412 1.19a1.636 1.636 0 0 1-.43 1.181l-.874.875 1.505 2.625 1.234-.306c.44-.094.9-.009 1.277.236.385.202.675.548.805.963l.341 1.207h2.984l.341-1.216c.138-.416.433-.762.823-.963a1.638 1.638 0 0 1 1.234-.227l1.216.306 1.505-2.625-.875-.875A1.637 1.637 0 0 1 13.338 8ZM9.313 8a1.313 1.313 0 1 1-2.625.002A1.313 1.313 0 0 1 9.313 8Z" /></svg>;
};
export default IconSettingsFilled;