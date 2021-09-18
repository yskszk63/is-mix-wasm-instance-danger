const memory = new WebAssembly.Memory({initial: 128});

const mainbc = await Deno.readFile(new URL("./main.opt.wasm", import.meta.url));
const maininstance = await WebAssembly.instantiate(mainbc, {
    env: {
        memory,
        print: (ptr: number, size: number) => console.log(new TextDecoder().decode(new Uint8Array(memory.buffer, ptr, size))),
    }
});

const extrabc = await Deno.readFile(new URL("./extra.opt.wasm", import.meta.url));
await WebAssembly.instantiate(extrabc, { env: { memory, } });

(maininstance.instance.exports._start as () => void)();
