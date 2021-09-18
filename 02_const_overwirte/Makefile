CC = clang
CFLAGS = --target=wasm32-wasi --sysroot=/opt/wasi-sdk/wasi-sysroot -nostartfiles -Wl,--no-entry,--import-memory

TARGETS = extra.wasm main.wasm extra.opt.wasm main.opt.wasm

.SUFFIXES: .wasm .c .opt.wasm
.c.wasm:
	$(CC) $(CFLAGS) -o $@ $<

.wasm.opt.wasm:
	wasm-opt -Os -o $@ $<

.PHONY: all
all: run

run: extra.opt.wasm main.opt.wasm
	deno run --allow-read ./run.ts

.PHONY: clean
clean:
	$(RM) $(TARGETS)
