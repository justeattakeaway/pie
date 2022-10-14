import * as React from "react";
import { SVGProps } from "react";

const Note = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="c-pieIcon c-pieIcon--note" width="1em" height="1em" role="img" {...props}><path d="M20.125 21H1.75V22.75H20.125V21Z" /><path d="M26.25 5.25H1.75V7H26.25V5.25Z" /><path d="M26.25 13.125H1.75V14.875H26.25V13.125Z" /></svg>;

export default Note;