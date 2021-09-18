extern void print(void *ptr, int len) __attribute__((import_module("env"), import_name("print")));
extern void func() __attribute__((import_module("env"), import_name("func")));

void _start() __attribute__((export_name("_start"))) {
    char _[16] = "💩!!";
    char buf[6] = "hello";
    func();
    print(&buf, 6);
}
