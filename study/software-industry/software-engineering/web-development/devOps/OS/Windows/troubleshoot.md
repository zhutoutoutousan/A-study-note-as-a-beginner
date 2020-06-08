# Table of Contents
- [Table of Contents](#table-of-contents)
- [Memory leak](#memory-leak)
  - [Symptom](#symptom)
  - [Edit Registry - Ndu and Null](#edit-registry---ndu-and-null)
    - [Procedure](#procedure)
    - [How it works](#how-it-works)
  - [Edit Registry - Memory Management](#edit-registry---memory-management)
    - [Procedure](#procedure-1)
  - [Stop ```Superfetch``` service](#stop-superfetch-service)
    - [Procedure](#procedure-2)
    - [How it works](#how-it-works-1)
  - [Device manager - Scan for hardware changes](#device-manager---scan-for-hardware-changes)
    - [Confirmed repercussions](#confirmed-repercussions)
    - [Potential repercussions](#potential-repercussions)
  - [Resource](#resource)
  - [Reference](#reference)
# Memory leak
## Symptom
- 16GB ram shows 60% usage just after starting up
## Edit Registry - Ndu and Null
### Procedure
1. Navigate to ```Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Ndu```(Start: 2)
2. The same for ```Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Null```(Start: 1)
3. Edit ```Start``` value to 4
4. Restart
### How it works

## Edit Registry - Memory Management
### Procedure
1. Navigate to ```Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management```
2. Edit ```ClearPageFileAtShutdown``` value to 1

## Stop ```Superfetch``` service
### Procedure
Skipped
### How it works

## Device manager - Scan for hardware changes
### Confirmed repercussions
- If you disable ```Null```, when you use Git, it will show the error:
```
Git error fatal:open/dev/null or DUP failed:no such file or directory
```

### Potential repercussions
[What is Ndu?](https://www.file.net/process/ndu.sys.html)
## Resource
[How To Avoid And Fix Memory Leaks In Windows 10](https://blog.pcrisk.com/windows/12971-fix-memory-leaks-in-windows)  
[How To Fix High Memory/RAM Usage In Windows 10 [2020 Solution]](https://www.youtube.com/watch?v=UZMqSEfTNKg)

## Reference
