const bc = await Deno.readFile(new URL('./stack.mod.wasm', import.meta.url));
const instance = await WebAssembly.instantiate(bc, {
    env: {
        callback: (ptr: number) => {
            const global = instance.instance.exports.global as WebAssembly.Global;
            console.log(ptr, global.value);
            if (ptr !== global.value) {
                throw new Error();
            }
            if (ptr > 0) {
                (instance.instance.exports.func as () => void)();
            }
        }
    }
});
(instance.instance.exports.func as () => void)();
