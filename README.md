Repro for https://github.com/automerge/automerge/issues/831

Error from Next.js when running `pnpm build`:

```
   ▲ Next.js 14.1.0

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (0/4)  [    ]Error: ENOENT: no such file or directory, open '/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/automerge_wasm_bg.wasm'
    at Object.openSync (node:fs:581:18)
    at Object.readFileSync (node:fs:457:35)
    at 9961 (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/page.js:2:281)
    at t (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/webpack-runtime.js:1:142)
    at 6959 (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/page.js:1:16097)
    at t (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/webpack-runtime.js:1:142)
    at F (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94693)
    at /Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:97108
    at W._fromJSON (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:97546)
    at JSON.parse (<anonymous>) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/automerge_wasm_bg.wasm'
}

```

Error from React when running `pnpm dev`:

```
### Unhandled Runtime Error

Error: Element type is invalid: expected a string (for built-in components) or a class/function
(for composite components) but got: object. You likely forgot to export your component from the
file it's defined in, or you might have mixed up default and named imports.

Check the render method of `StaticGenerationSearchParamsBailoutProvider`.

Call Stack
createFiberFromTypeAndProps
node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js (27799:16)
...
```
