import React from "react";
import { createComponent } from "@lit-labs/react";
import { PieButton } from "@justeattakeaway/pie-button";

const PieBtn = createComponent({
  tagName: "pie-button",
  elementClass: PieButton,
  react: React,
  events: { onCustomEvent: "CustomEvent" },
});

export default function Home() {
  return <PieBtn>decrement</PieBtn>;
}
