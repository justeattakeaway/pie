import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useAttribute, useBooleanAttribute } from "./react-utils.js";
import { PieButton as PieButtonElement } from "../../dist/index.js";

export const PieButton = forwardRef(
  (
    {
      disabled,
      isloading,
      isfullwidth,
      isresponsive,
      size,
      type,
      variant,
      iconplacement,
      name,
      value,
      formaction,
      formenctype,
      formmethod,
      formnovalidate,
      formtarget,
      responsivesize,
      id,
      className,
      style,
      slot,
      hidden,
      key,
      children,
      tabIndex,
      onClick,
    },
    forwardedRef
  ) => {
    const ref = useRef(null);

    /** Boolean attributes - run whenever an attr has changed */
    useBooleanAttribute(ref, "disabled", disabled);
    useBooleanAttribute(ref, "isLoading", isloading);
    useBooleanAttribute(ref, "isFullWidth", isfullwidth);
    useBooleanAttribute(ref, "isResponsive", isresponsive);

    /** Attributes - run whenever an attr has changed */
    useAttribute(ref, "size", size);
    useAttribute(ref, "type", type);
    useAttribute(ref, "variant", variant);
    useAttribute(ref, "iconPlacement", iconplacement);
    useAttribute(ref, "name", name);
    useAttribute(ref, "value", value);
    useAttribute(ref, "formaction", formaction);
    useAttribute(ref, "formenctype", formenctype);
    useAttribute(ref, "formmethod", formmethod);
    useAttribute(ref, "formnovalidate", formnovalidate);
    useAttribute(ref, "formtarget", formtarget);
    useAttribute(ref, "responsiveSize", responsivesize);
    useAttribute(ref, "id", id);
    useAttribute(ref, "style", style);
    useAttribute(ref, "slot", slot);
    useAttribute(ref, "hidden", hidden);
    useAttribute(ref, "key", key);
    useAttribute(ref, "children", children);
    useAttribute(ref, "ref", ref);
    useAttribute(ref, "tabindex", tabIndex);

    useImperativeHandle(forwardedRef, () => ({}));

    return React.createElement(
      PieButtonElement.customTag || "pie-button",
      {
        ref,
        size,
        type,
        variant,
        iconPlacement: iconplacement,
        name,
        value,
        formaction,
        formenctype,
        formmethod,
        formnovalidate,
        formtarget,
        responsiveSize: responsivesize,
        id,
        class: className,
        style,
        slot,
        hidden,
        key,
        children,
        tabindex: tabIndex,
        onClick,
      },
      children
    );
  }
);
