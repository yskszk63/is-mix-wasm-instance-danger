CC = clang
CFLAGS = --target=wasm32-wasi --sysroot=/opt/wasi-sdk/wasi-sysroot -nostartfiles -Wl,--no-entry

.PHONY: all
all: run

.PHONY: run
run: stack.mod.wasm
	deno run --allow-read $(CURDIR)/run.ts

stack.mod.wasm: stack.mod.wat
	wat2wasm $< > $@

stack.mod.wat: stack.opt.wat
	sed -e'$$ i (export "global" (global 0))' $< > $@

stack.opt.wat: stack.opt.wasm
	wasm2wat $< > $@

stack.opt.wasm: stack.wasm
	wasm-opt -Os -o $@ $<

stack.wasm: stack.c
	$(CC) $(CFLAGS) -o $@ $<

.PHONY: clean
clean:
	$(RM) stack.mod.wasm stack.mod.wat stack.opt.wat stack.opt.wasm stack.wasm
