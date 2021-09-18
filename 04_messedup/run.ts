const memory = new WebAssembly.Memory({initial: 128});

const libbc = await Deno.readFile(new URL("./lib.opt.wasm", import.meta.url));
const libinstance = await WebAssembly.instantiate(libbc, {
    env: { memory, }
});

const mainbc = await Deno.readFile(new URL("./main.opt.wasm", import.meta.url));
const maininstance = await WebAssembly.instantiate(mainbc, {
    env: {
        memory,
        func: libinstance.instance.exports.func,
        print: (ptr: number, size: number) => {
            const buf = new Uint8Array(memory.buffer, ptr, size);
            console.log(new TextDecoder().decode(buf));
        }
    }
});

(maininstance.instance.exports._start as () => void)();
