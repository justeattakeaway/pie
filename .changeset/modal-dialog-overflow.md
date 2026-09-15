---
"@justeattakeaway/pie-modal": patch
---

[Fixed] - The dialog no longer clips its own contents, so an overlay slotted into the modal, such as `pie-tooltip`, can render outside it. The browser gives a modal dialog `overflow: auto`, which the modal does not need because scrolling is owned by a dedicated inner scroll container. The image slot and the scroll container now round their own corners to match the modal's radius.
