WASI_SYSROOT=/opt/wasi-sdk/wasi-sysroot
CC = clang
CFLAGS = --target=wasm32-wasi --sysroot=$(WASI_SYSROOT) -nostartfiles -Wl,--no-entry,--import-memory

TARGETS = lib.wasm main.wasm lib.opt.wasm main.opt.wasm

.SUFFIXES: .wasm .c .opt.wasm
.c.wasm:
	$(CC) $(CFLAGS) -o $@ $<

.wasm.opt.wasm:
	wasm-opt -Os -o $@ $<

.PHONY: all
all: run

run: lib.opt.wasm main.opt.wasm
	deno run --allow-read ./run.ts

.PHONY: clean
clean:
	$(RM) $(TARGETS)
