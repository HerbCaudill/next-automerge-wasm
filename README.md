Repro for https://github.com/automerge/automerge/issues/831

```
> pnpm build

   ▲ Next.js 14.1.0

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  .Error: ENOENT: no such file or directory, open '/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/automerge_wasm_bg.wasm'
    at Object.openSync (node:fs:581:18)
    at Object.readFileSync (node:fs:457:35)
    at 4 (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/page.js:7:281)
    at t (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/webpack-runtime.js:1:142)
    at 4689 (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/page.js:1:16734)
    at Function.t (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/webpack-runtime.js:1:142)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async collectGenerateParams (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/utils.js:919:21)
    at async /Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/utils.js:1138:17
    at async Span.traceAsyncFn (/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/trace/trace.js:151:20) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/.next/server/app/automerge_wasm_bg.wasm'
}

> Build error occurred
Error: Failed to collect page data for /
    at /Users/herbcaudill/Code/HerbCaudill/next-automerge-wasm/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/utils.js:1258:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
   Collecting page data  . ELIFECYCLE  Command failed with exit code 1.
```
