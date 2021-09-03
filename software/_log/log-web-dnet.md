# 2021/9/3
## Understand dis
```
Informationen über das Aufrufen von JIT-Debuggen
anstelle dieses Dialogfelds finden Sie am Ende dieser Meldung.

************** Ausnahmetext **************
System.NullReferenceException: Der Objektverweis wurde nicht auf eine Objektinstanz festgelegt.
   bei Docker.Core.Features.Features.<IsEnabled>d__16.MoveNext() in C:\workspaces\PR-16319\src\github.com\docker\pinata\win\src\Docker.Core\Features\Features.cs:Zeile 91.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()
   bei System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)
   bei Docker.App.<Initialize>d__27.MoveNext() in C:\workspaces\PR-16319\src\github.com\docker\pinata\win\src\Docker.Desktop\App.cs:Zeile 111.
--- Ende der Stapelüberwachung vom vorhergehenden Ort, an dem die Ausnahme ausgelöst wurde ---
   bei System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()


************** Geladene Assemblys **************
mscorlib
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4400.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.NET/Framework64/v4.0.30319/mscorlib.dll.
----------------------------------------
Docker Desktop
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker%20Desktop.exe.
----------------------------------------
Docker.Core
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker.Core.DLL.
----------------------------------------
Docker.WPF
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker.WPF.DLL.
----------------------------------------
PresentationFramework
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/PresentationFramework/v4.0_4.0.0.0__31bf3856ad364e35/PresentationFramework.dll.
----------------------------------------
WindowsBase
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/WindowsBase/v4.0_4.0.0.0__31bf3856ad364e35/WindowsBase.dll.
----------------------------------------
System.Core
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Core/v4.0_4.0.0.0__b77a5c561934e089/System.Core.dll.
----------------------------------------
System
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4360.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System/v4.0_4.0.0.0__b77a5c561934e089/System.dll.
----------------------------------------
PresentationCore
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_64/PresentationCore/v4.0_4.0.0.0__31bf3856ad364e35/PresentationCore.dll.
----------------------------------------
System.Xaml
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Xaml/v4.0_4.0.0.0__b77a5c561934e089/System.Xaml.dll.
----------------------------------------
Docker.ApiServices
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker.ApiServices.DLL.
----------------------------------------
Docker.Engines
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker.Engines.DLL.
----------------------------------------
Docker.HttpApi
    Assembly-Version: 1.0.0.0.
    Win32-Version: 4.0.0.67817.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Docker.HttpApi.DLL.
----------------------------------------
System.Windows.Forms
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4400.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Windows.Forms/v4.0_4.0.0.0__b77a5c561934e089/System.Windows.Forms.dll.
----------------------------------------
System.Drawing
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4390.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Drawing/v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Drawing.dll.
----------------------------------------
System.Net.Http
    Assembly-Version: 4.2.0.0.
    Win32-Version: 4.6.26011.01.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Net.Http.DLL.
----------------------------------------
HttpOverStream.NamedPipe
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/HttpOverStream.NamedPipe.DLL.
----------------------------------------
NLog
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.5.10.8381.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/NLog.DLL.
----------------------------------------
System.Configuration
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4190.0 built by: NET48REL1LAST_B.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Configuration/v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Configuration.dll.
----------------------------------------
System.Xml
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0 built by: NET48REL1.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Xml/v4.0_4.0.0.0__b77a5c561934e089/System.Xml.dll.
----------------------------------------
Newtonsoft.Json
    Assembly-Version: 11.0.0.0.
    Win32-Version: 11.0.2.21924.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Newtonsoft.Json.DLL.
----------------------------------------
System.Numerics
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0 built by: NET48REL1.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Numerics/v4.0_4.0.0.0__b77a5c561934e089/System.Numerics.dll.
----------------------------------------
System.Runtime.Serialization
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4250.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Runtime.Serialization/v4.0_4.0.0.0__b77a5c561934e089/System.Runtime.Serialization.dll.
----------------------------------------
System.Data
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4270.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_64/System.Data/v4.0_4.0.0.0__b77a5c561934e089/System.Data.dll.
----------------------------------------
System.ServiceModel
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4250.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.ServiceModel/v4.0_4.0.0.0__b77a5c561934e089/System.ServiceModel.dll.
----------------------------------------
BITSReference5_0
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/BITSReference5_0.DLL.
----------------------------------------
HttpOverStream
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/HttpOverStream.DLL.
----------------------------------------
System.Threading.Tasks.Extensions
    Assembly-Version: 4.2.0.1.
    Win32-Version: 4.6.27818.01.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Threading.Tasks.Extensions.DLL.
----------------------------------------
System.Web.Http
    Assembly-Version: 5.2.7.0.
    Win32-Version: 5.2.61128.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Web.Http.DLL.
----------------------------------------
HttpOverStream.Client
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/HttpOverStream.Client.DLL.
----------------------------------------
netstandard
    Assembly-Version: 2.0.0.0.
    Win32-Version: 4.8.4084.0.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/netstandard/v4.0_2.0.0.0__cc7b13ffcd2ddd51/netstandard.dll.
----------------------------------------
System.ValueTuple
    Assembly-Version: 4.0.3.0.
    Win32-Version: 4.6.26515.06.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.ValueTuple.DLL.
----------------------------------------
Bugsnag
    Assembly-Version: 2.2.0.0.
    Win32-Version: 2.2.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Bugsnag.DLL.
----------------------------------------
PresentationFramework.Aero2
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0 built by: NET48REL1.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/PresentationFramework.Aero2/v4.0_4.0.0.0__31bf3856ad364e35/PresentationFramework.Aero2.dll.
----------------------------------------
PresentationFramework.resources
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/PresentationFramework.resources/v4.0_4.0.0.0_de_31bf3856ad364e35/PresentationFramework.resources.dll.
----------------------------------------
Anonymously Hosted DynamicMethods Assembly
    Assembly-Version: 0.0.0.0.
    Win32-Version: 4.8.4400.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_64/mscorlib/v4.0_4.0.0.0__b77a5c561934e089/mscorlib.dll.
----------------------------------------
Microsoft.Toolkit.Uwp.Notifications
    Assembly-Version: 1.5.1.0.
    Win32-Version: 1.5.1.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Microsoft.Toolkit.Uwp.Notifications.DLL.
----------------------------------------
System.Runtime
    Assembly-Version: 4.1.2.0.
    Win32-Version: 4.6.25714.01.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Runtime.DLL.
----------------------------------------
Windows.UI
    Assembly-Version: 255.255.255.255.
    Win32-Version: 10.0.10011.16384.
    CodeBase: file:///C:/Windows/system32/WinMetadata/Windows.UI.winmd.
----------------------------------------
Windows.Foundation
    Assembly-Version: 255.255.255.255.
    Win32-Version: 10.0.10011.16384.
    CodeBase: file:///C:/Windows/system32/WinMetadata/Windows.Foundation.winmd.
----------------------------------------
System.Runtime.InteropServices.WindowsRuntime
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Runtime.InteropServices.WindowsRuntime/v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Runtime.InteropServices.WindowsRuntime.dll.
----------------------------------------
Windows.Data
    Assembly-Version: 255.255.255.255.
    Win32-Version: 10.0.10011.16384.
    CodeBase: file:///C:/Windows/system32/WinMetadata/Windows.Data.winmd.
----------------------------------------
System.Collections
    Assembly-Version: 4.0.11.0.
    Win32-Version: 4.6.25714.01.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Collections.DLL.
----------------------------------------
System.Runtime.CompilerServices.Unsafe
    Assembly-Version: 4.0.4.1.
    Win32-Version: 4.6.26919.02.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Runtime.CompilerServices.Unsafe.DLL.
----------------------------------------
mscorlib.resources
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0 built by: NET48REL1.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/mscorlib.resources/v4.0_4.0.0.0_de_b77a5c561934e089/mscorlib.resources.dll.
----------------------------------------
Microsoft.Owin
    Assembly-Version: 4.1.0.0.
    Win32-Version: 4.1.81112.127.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Microsoft.Owin.DLL.
----------------------------------------
Owin
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Owin.DLL.
----------------------------------------
HttpOverStream.Server.Owin
    Assembly-Version: 1.0.0.0.
    Win32-Version: 1.0.0.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/HttpOverStream.Server.Owin.DLL.
----------------------------------------
Microsoft.Owin.Hosting
    Assembly-Version: 4.1.0.0.
    Win32-Version: 4.1.81112.127.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/Microsoft.Owin.Hosting.DLL.
----------------------------------------
System.Web.Http.Owin
    Assembly-Version: 5.2.7.0.
    Win32-Version: 5.2.61128.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Web.Http.Owin.DLL.
----------------------------------------
System.Net.Http.Formatting
    Assembly-Version: 5.2.7.0.
    Win32-Version: 5.2.61128.0.
    CodeBase: file:///C:/Program%20Files/Docker/Docker/System.Net.Http.Formatting.DLL.
----------------------------------------
SMDiagnostics
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4250.0 built by: NET48REL1LAST_C.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/SMDiagnostics/v4.0_4.0.0.0__b77a5c561934e089/SMDiagnostics.dll.
----------------------------------------
System.Windows.Forms.resources
    Assembly-Version: 4.0.0.0.
    Win32-Version: 4.8.4084.0 built by: NET48REL1.
    CodeBase: file:///C:/Windows/Microsoft.Net/assembly/GAC_MSIL/System.Windows.Forms.resources/v4.0_4.0.0.0_de_b77a5c561934e089/System.Windows.Forms.resources.dll.
----------------------------------------

************** JIT-Debuggen **************
Um das JIT-Debuggen (Just-In-Time) zu aktivieren, muss in der
Konfigurationsdatei der Anwendung oder des Computers
(machine.config) der jitDebugging-Wert im Abschnitt system.windows.forms festgelegt werden.
Die Anwendung muss mit aktiviertem Debuggen kompiliert werden.

Zum Beispiel:

<configuration>
    <system.windows.forms jitDebugging="true" />
</configuration>

Wenn das JIT-Debuggen aktiviert ist, werden alle nicht behandelten
Ausnahmen an den JIT-Debugger gesendet, der auf dem
Computer registriert ist, und nicht in diesem Dialogfeld behandelt.


```