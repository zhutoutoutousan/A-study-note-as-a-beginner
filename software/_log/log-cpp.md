# 2021/3/30
## Something about pointer
- It's like, if without asteroid, it's address. If with, then fetch the variable.
- Maybe the information passed includes the `program native pointer and its value`
- I'm not sure if it is right

## Heap overflow

```
=================================================================
==30==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6030000000b8 at pc 0x000000345dc5 bp 0x7ffcdce24da0 sp 0x7ffcdce24d98
READ of size 4 at 0x6030000000b8 thread T0
    #4 0x7f938f2ff0b2  (/lib/x86_64-linux-gnu/libc.so.6+0x270b2)
0x6030000000b8 is located 0 bytes to the right of 24-byte region [0x6030000000a0,0x6030000000b8)
allocated by thread T0 here:
    #6 0x7f938f2ff0b2  (/lib/x86_64-linux-gnu/libc.so.6+0x270b2)
Shadow bytes around the buggy address:
  0x0c067fff7fc0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c067fff7fd0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c067fff7fe0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c067fff7ff0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c067fff8000: fa fa 00 00 00 07 fa fa 00 00 00 00 fa fa 00 00
=>0x0c067fff8010: 00 fa fa fa 00 00 00[fa]fa fa fa fa fa fa fa fa
  0x0c067fff8020: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c067fff8030: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c067fff8040: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c067fff8050: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c067fff8060: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
Shadow byte legend (one shadow byte represents 8 application bytes):
  Addressable:           00
  Partially addressable: 01 02 03 04 05 06 07 
  Heap left redzone:       fa
  Freed heap region:       fd
  Stack left redzone:      f1
  Stack mid redzone:       f2
  Stack right redzone:     f3
  Stack after return:      f5
  Stack use after scope:   f8
  Global redzone:          f9
  Global init order:       f6
  Poisoned by user:        f7
  Container overflow:      fc
  Array cookie:            ac
  Intra object redzone:    bb
  ASan internal:           fe
  Left alloca redzone:     ca
  Right alloca redzone:    cb
  Shadow gap:              cc
==30==ABORTING
```

# 2021/3/31
## std::erase under the hood
Maybe later, today I just sort of want to log it and leave it without doing anything:) How naughty~
https://blog.csdn.net/TINA_DD/article/details/111937139

# 2021/6/13
## Explain to me what \#include does in cpp