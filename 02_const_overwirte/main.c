extern void print(void *ptr, int len) __attribute__((import_module("env"), import_name("print")));

void _start() __attribute__((export_name("_start"))) {
    char buf[6] = "hello";
    print(&buf, 6);
}
