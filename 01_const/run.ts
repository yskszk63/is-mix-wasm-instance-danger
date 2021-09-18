const memory = new WebAssembly.Memory({initial: 32});
const bc = await Deno.readFile(new URL('./a.wasm', import.meta.url));
console.log(new Uint8Array(memory.buffer, 0, 8));
await WebAssembly.instantiate(bc, { env: { memory } });
console.log(new Uint8Array(memory.buffer, 0, 8));
