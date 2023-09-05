---
"pie-monorepo": patch
---

[Fixed] - `@babel/traverse` issue that was causing `wc-next10` build to fail.

### Issue Overview
GitHub Issue - https://github.com/babel/babel/issues/15765

We had a number of packages that depend on the following dependency `"@babel/traverse": "7.22.8"`.

In this version, there is a bug that causes following error when trying to build `wc-next10`:

```js
You gave us a visitor for the node type ClassAccessorProperty but it's not a valid type.
```


