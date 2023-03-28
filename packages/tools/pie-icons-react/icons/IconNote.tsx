import * as React from "react";
import { SVGProps } from "react";
const IconNote = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--note " + (props.extraClass ?? '') } width="1em" height="1em" {...props}><path fill="#242E30" d="M15 7.344H1v1.312h14V7.344Z" /><path fill="#242E30" d="M11.5 11.719H1v1.312h10.5V11.72Z" /><path fill="#242E30" d="M15 2.969H1V4.28h14V2.97Z" /></svg>;
export default IconNote;