# Cloud computing general
- [Cloud Computing Full Course In 11 Hours | Cloud Computing Tutorial For Beginners | Edureka](https://www.youtube.com/watch?v=2LaAJq1lB1Q)

# Azure Certification
- [Microsoft Azure Fundamentals Certification Course (AZ-900) - Pass the exam in 3 hours!](https://www.youtube.com/watch?v=NKEFWyqJ5XA)
  - Videomark: 0-40
- [Azure Administrator Certification (AZ-104) - Full Course to PASS the Exam](https://www.youtube.com/watch?v=10PbGbTUSAg)
  - Videomark： 3-49


# Information source
- [QAStack](https://qastack.cn/)

# 运维踩坑树
- Docker
  - Update stopped by xxxlibaba service
    - [How can I remove the service and folder permanently?](https://superuser.com/questions/1370995/how-can-i-remove-the-service-and-folder-permanently)
  - Work with Git bash
    - `stdin is not a tty`
      - https://gist.github.com/borekb/cb1536a3685ca6fc0ad9a028e6a959e3
  - I typed `wsl --shutdown` to downsize vhdx, and now it shows this: $ENTRY_POET_1
# Erudition
- 内网渗透测试：初探远程桌面的安全问题
- Pro Git
  - #activereading
  - [link](https://git-scm.com/book/en/v2)
  - Booktrail: 
    - S-1.6
      - Undoing things
      - 3.1 Branching
        - Checksum
          - [Hash function](https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B8)
    - 1.6-2.1
      - 2.1
# Security
- RDP
  - [内网渗透｜基于文件传输的 RDP 反向攻击](https://www.wangan.com/p/7fygf7c8abb0b427)

# Re-structure plan
- Integrate AWS into this note as soon as you get the Pro certificate


# PASS AUF!
Q|JiS#j[4)2kGWC _13


# 2021/2/24
## 云服务器上CentOS可视化
- [云服务器上centOS可视化](https://blog.csdn.net/qq_37666178/article/details/88071108)
- [VNC远程连接CentOS7.6桌面|VNC如何连接CentOS](https://zhuanlan.zhihu.com/p/87760397)

# 2021/3/2
## 分布式版本控制

# 2021/3/8
## Vscode里边安装Golang一直报Failed, 今天可能知道是为啥了
- Vscode今天提示It seems like your go server is disabled, 我activate之后提示gopls安装成功, 暗示如果golang vscode的包安装不成功有可能跟go server未启用有关
- https://github.com/microsoft/vscode-go/issues/2907

# 2021/5/25
## How to keep-alive SSH connection
- [How to Keep Alive SSH Sessions](https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/)

# 2021/9/22
- Learning Azure
  - Documents
    - https://docs.microsoft.com/en-us/azure/devops/organizations/projects/project-vision-status?view=azure-devops
    - https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops
  - Tutorials
    - General
      - DevOps Engineering Course for Beginners --link
      - [DevOps Full Course | Learn DevOps In 10 Hours | DevOps Tutorial For Beginners | DevOps | Simplilearn](https://www.youtube.com/watch?v=5KtRF4NuUWE)
    - Azure

# 2021/9/26
## curl 500 proxy error
- [完美解决V2RAY碰到500 Internal Privoxy Error问题](https://www.obodizhu.com/online/v2ray-fix-500-internal-privoxy-error.html)
- [curl抽风了什么网站都是500](https://juejin.cn/post/6844903901133701134)

# 2021/10/1
## Past effort encapsulation
- [Fundamental of IT - Complete Course || IT course for Beginners](https://www.youtube.com/watch?v=awLnur5Yt9o&t=4094s)
  - Videomark?: 1-08-14/3-49-16
- [System administration complete course from beginner to advanced | IT administrator full course](https://www.youtube.com/watch?v=1DvTwuByjo0&t=7s)

# 2021/10/31-
## 阿里云 - 实例最佳选型
- [选型最佳实践](https://help.aliyun.com/document_detail/58291.html)
  - 阿里云 - ECS doc阅读
    - Docmark: 动态与公告

- Learning to speak - Context: Tencent Cloud
  - ICMP
  - ICMPV6
  - CAM角色
  - 置放群组

## 腾讯云中, 按量计费的实例关机后是否还继续算钱
- 关机不收费

## 通过Powershell连接Windows实例
- [如何使用命令行界面连接到Windows服务器？（CLI）](https://qastack.cn/server/429426/how-can-i-connect-to-a-windows-server-using-a-command-line-interface-cli)


## Windows Server - Add some client features
- Install something without using Internet Explorer
  - [在 Windows Server 上使用Powershell 一键安装 Chrome](https://www.dengnz.com/2019/07/04/%E5%9C%A8-windows-server-%E4%B8%8A%E4%BD%BF%E7%94%A8powershell-%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85-chrome/)


# 2021/3/18
## How to automate the password entering process using shell?


# Poet
## $ENTRY_POET_1
```
System.TimeoutException:
Timeout für den Vorgang wurde überschritten.
   bei System.IO.Pipes.NamedPipeClientStream.ConnectInternal(Int32 timeout, CancellationToken cancellationToken, Int32 startTime)
   bei System.Threading.Tasks.Task.Execute()
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei HttpOverStream.NamedPipe.NamedPipeDialer.<DialAsync>d__8.MoveNext()
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei HttpOverStream.Client.DialMessageHandler.<SendAsync>d__9.MoveNext()
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.Core.IPC.Client.<SendAsync>d__5.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.Core\IPC\Client.cs:Zeile 40.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei System.Net.Http.HttpClient.<FinishSendAsyncBuffered>d__58.MoveNext()
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.Core.HttpClientExtensions.<GetJsonAsync>d__0`1.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.Core\HttpClientExtensions.cs:Zeile 16.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.ApiServices.LifecycleClient.<GetDockerStateAsync>d__4.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.Engines\LifecycleClient.cs:Zeile 49.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()
   bei Docker.Engines.LinuxkitDaemonStartup.<WaitAsync>d__5.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.Engines\LinuxkitDaemonStartup.cs:Zeile 60.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.Engines.WSL2.LinuxWSL2Engine.<DoStartAsync>d__28.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.Engines\WSL2\LinuxWSL2Engine.cs:Zeile 178.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.ApiServices.StateMachines.TaskExtensions.<WrapAsyncInCancellationException>d__0.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.ApiServices\StateMachines\TaskExtensions.cs:Zeile 29.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.ApiServices.StateMachines.StartTransition.<DoRunAsync>d__5.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.ApiServices\StateMachines\StartTransition.cs:Zeile 67.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei Docker.ApiServices.StateMachines.StartTransition.<DoRunAsync>d__5.MoveNext() in C:\workspaces\PR-17296\src\github.com\docker\pinata\win\src\Docker.ApiServices\StateMachines\StartTransition.cs:Zeile 92.
```