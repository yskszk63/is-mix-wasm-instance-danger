extern void callback(void* ptr) __attribute__((import_module("env"), import_name("callback")));

void func() __attribute__((export_name("func"))) {
    char buf[8192];
    callback(&buf);
}
