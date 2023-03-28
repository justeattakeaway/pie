import * as React from "react";
import { SVGProps } from "react";
const IconArrowDown = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--arrow-down " + (props.extraClass ?? '') } width="1em" height="1em" {...props}><path fill="#242E30" d="M7.25 1v11.65L3.49 8.89 2.43 10l4.69 4.68a1.239 1.239 0 0 0 1.76 0L13.57 10l-1.06-1.11-3.76 3.76V1h-1.5Z" /></svg>;
export default IconArrowDown;