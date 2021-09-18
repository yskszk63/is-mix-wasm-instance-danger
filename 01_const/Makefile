.SUFFIXES: .wasm .wat
.wat.wasm:
	wat2wasm -o $@ $<

.PHONY: all
all: test

.PHONY: test
test: a.wasm
	deno run --allow-read $(CURDIR)/run.ts

.PHONY: clean
clean:
	$(RM) a.wasm
