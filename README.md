# Vite + React: "Uncaught Error: @vitejs/plugin-react can't detect preamble. Something is wrong."

## Getting started

Reproduce this by running:

```
  pnpm install
  pnpm dev
```

So far, reproducible in Chrome.

## Error detail

> Home.tsx:1 Uncaught Error: @vitejs/plugin-react can't detect preamble. Something is wrong.

This is the error that's seen, so far only in Chrome (latest). Clicking on `Shift` + Refresh causes it to "work", until the next refresh.
<img src="vite_error/vite_error.png"/>

This stems from the `Home` component, which I've made an empty functional React component
<img src="vite_error/vite_error_detail.png"/>

Possible info:

- https://github.com/vitejs/vite-plugin-react/pull/79

This error goes away if we remove the component by commenting out https://github.com/bsodmike/vitejs-react-plugin-error-troubleshoot-public/blob/master/src/main.tsx#L23-L28. There were references to not using `export default`, but that didn't work either (by doing `export const Home`).

### Other issues

- `http://localhost:5173/@vite-plugin-pwa/pwa-entry-point-loaded net::ERR_ABORTED 404 (Not Found)` - where does this come from?
- `Uncaught SyntaxError: The requested module '/@react-refresh' does not provide an export named 'injectIntoGlobalHook' (at (index):4:36)` - is this injected by React?

## Feedback

Please open an issue and I'd appreciate any feedback possible.

Thanks!
