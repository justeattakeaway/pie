---
"@justeattakeaway/pie-webc-core": minor
---

[Added] - A shared, extensible ARIA context: `ariaContext` and the `ContextualAria` type. It lets an ancestor component supply an accessible name and description to a descendant control across the shadow boundary (where `aria-labelledby` / `aria-describedby` cannot reach) and at any depth, without prop drilling. Any control can consume it and decide how to apply each field; a control's own ARIA props take precedence.
