# Memory leak
## Symptom
- 16GB ram shows 60% usage just after starting up
## Edit registry
### Procedure
1. Navigate to ```Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Ndu```(Start: 2)
2. The same for ```Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Null```(Start: 1)
3. Edit ```Start``` value to 4
4. Restart
### How it works

### Potential repercussions
[What is Ndu?](https://www.file.net/process/ndu.sys.html)
## Resource
[How To Avoid And Fix Memory Leaks In Windows 10](https://blog.pcrisk.com/windows/12971-fix-memory-leaks-in-windows)  
[How To Fix High Memory/RAM Usage In Windows 10 [2020 Solution]](https://www.youtube.com/watch?v=UZMqSEfTNKg)

## Reference
