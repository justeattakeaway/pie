import { useEffect, useLayoutEffect } from "react";

export function useAttribute(targetElement, attrName, value) {
  useLayoutEffect(() => {
    if (
      value !== undefined &&
      attrName !== "style" &&
      targetElement.current?.getAttribute(attrName) !== String(value)
    ) {
      targetElement.current?.setAttribute(attrName, String(value));
    }
  }, [value]);
}

export function useBooleanAttribute(targetElement, attrName, propName) {
  useEffect(() => {
    if (!propName || propName === "false") {
      targetElement.current?.removeAttribute(attrName);
    } else {
      targetElement.current?.setAttribute(attrName, "");
    }
  }, [propName]);
}

export function useProperties(targetElement, propName, value) {
  useEffect(() => {
    if (value !== undefined && targetElement.current[propName] !== value) {
      // add try catch to avoid errors when setting read-only properties
      try {
        targetElement.current[propName] = value;
      } catch (e) {
        console.warn(e);
      }
    }
  }, [value]);
}

export function useEventListener(targetElement, eventName, eventHandler) {
  useLayoutEffect(() => {
    if (eventHandler !== undefined) {
      targetElement?.current?.addEventListener(eventName, eventHandler);
    }

    return () => {
      if (eventHandler?.cancel) {
        eventHandler.cancel();
      }

      targetElement?.current?.removeEventListener(eventName, eventHandler);
    };
  }, [eventName, eventHandler, targetElement]);
}
