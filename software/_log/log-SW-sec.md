# Community
- [Hacker](https://www.hacker.org/)

# 攻防挖坑树
- Get all avaialable API endpoint of a site
  - skipfish
- OSINT
- Maltego

# 攻防踩坑树
- `x-powered-by`
- Google Dork Queries
  - Intitle: webcamxp
  - filetype:env "DB_PASSWORS"
- Kali
  - Configuration
    - Nessus
      - `System has not been booted with systemd as init system (PID 1). Can't operate.`
        - [Reason: Your Linux system is not using systemd](https://linuxhandbook.com/system-has-not-been-booted-with-systemd/)
        - [[3 Fixes] System Has Not Been Booted With Systemd as Init System [Partition Manager]](https://www.partitionwizard.com/partitionmanager/system-not-booted-with-systemd-as-init.html)
          - [Running Snaps on WSL2 (Insiders only for now)](https://forum.snapcraft.io/t/running-snaps-on-wsl2-insiders-only-for-now/13033)
    - ProxyChain
# Guided Source
- Reverse Engineering
  - [Reverse Engineering Basics](https://www.youtube.com/watch?v=a2EkORFcSZo)

# Erudition & Hands-On
- _source
  - [Top 10 Kali Linux Books for Beginners in 2022 || PawanChauhan.com](https://pawanchauhan.com/kali-linux-books-for-beginners/)
- [Full Ethical Hacking Course - Network Penetration Testing for Beginners (2019)](https://www.youtube.com/watch?v=3Kq1MIfTWCE)
  - Videomark: 1:00:19
- Wireshark数据包分析实战详解
  - Bookmark: 4
- Kali linux revealed: Mastering the Penetration Testing Distribution
  - [link](https://www.ubuntushop.be/kalirevealed.pdf)
  - Bookmark field
    - Sweepmark: 14/344
- Kali Linux渗透测试技术详解 - Paperback
  - Style: Hands-on
  - Process 1
    - Env: Kali WSL2
    - Bookmark: 43
      - Stuck On Proxychain installation
        - [How to Setup PROXYCHAINS in Kali-Linux by Terminal](https://medium.com/cyberxerx/how-to-setup-proxychains-in-kali-linux-by-terminal-618e2039b663)
# Defend
## Network
- Disable X-Forwarded-For(XFF) Header

# Follow-along


# Necessary Theoretical Erudition
- Image Forensics
  - [Digital Image Forensics](https://farid.berkeley.edu/downloads/tutorials/digitalimageforensics.pdf)
  - [A FORENSIC ANALYSIS OF DIGITAL IMAGE CHARACTERISTICS ASSOCIATED TO FLICKR® AND GOOGLE PLUS®](https://www.ucdenver.edu/docs/librariesprovider27/ncmf-docs/theses/lawson_thesis_fall2017.pdf?sfvrsn=844d97b8_2)
  - [An Overview on Image Forensics](https://www.hindawi.com/journals/isrn/2013/496701/)

# Practice Handbook
- Image Forensics
  - [picoCTF 2021: Forensics](https://knez.github.io/posts/picoctf-2021-forensics/)
# Resource pool
- LOI Liang Yang
- [PicoCTF](https://picoctf.org/resources)
- https://owasp.org/www-project-webgoat/
- Lab env
  - http://201.191.205.60/webgoat.net/Default.aspx

# Browser exploitation
- beefproject

# 2021/3/19
## Router Password Kracker: Specified router is not looking for (BASIC/DIGEST) Authentication
- Maybe I should learn more about this at my spare time~

# 2021/3/23
## Prevent people from getting any source code or browser

# 2021/7/27
## Error: SSL Error: SELF_SIGNED_CERT_IN_CHAIN' while using npm
https://medium.com/@jonatascastro12/understanding-self-signed-certificate-in-chain-issues-on-node-js-npm-git-and-other-applications-ad88547e7028
- Risky workaround
  - `npm config set strict-ssl false`
    - What's its security concern?
    - Compared to other dev process?
## Generate Pem file
- https://www.digicert.com/kb/ssl-support/pem-ssl-creation.htm

## Explain to me how .pem, ssl and certificate chain works
https://www.suse.com/support/kb/doc/?id=000018152
- [Digital Certificates: Chain of Trust](https://www.youtube.com/watch?v=heacxYUnFHA)
## generate PEM with key and entire trust chain

## ERROR: EISDIR: illegal operation on a directory, read on any npm command
- Reason
  - You noob, you must have entered a wrong `npm config set` command
- Solution
  - Reinstall
  - Troubleshoot
    - https://www.codenong.com/44631383/
        - 不好意思，找不到.npmrc
        - 不好意思，木有权限
- Worked Solution
  - Windows 10: Navigate to `C:\Program Files\nodejs\node_modules\npm`, there's an `.npmrc` file that set the prefix to `${APPDATA}\npm`, but `APPDATA` doesn't exist, so it showed `EISDIR` error. Just delete it 
- Discovering: There's another one `.npmrc` in ...APPDATA\roaming\npm\etc

# 2021/8/9

# 2021/8/18
## Hack Wechat
- http://www.360doc.com/content/17/0529/19/30119560_658272534.shtml
- file:///C:/Users/Administrator/Downloads/futureinternet-10-00114.pdf
- JSON escape
- [如何利用Python网络爬虫抓取微信朋友圈的动态（上）](https://cloud.tencent.com/developer/news/205148)
- [如何利用Python网络爬虫爬取微信朋友圈动态-附代码（下）](https://cloud.tencent.com/developer/news/208973)

# 2021/8/23-
## Mobile hacking
- [Remotely Control Any Phone](https://www.youtube.com/watch?v=2_26Ndtt0xU)
  - L3MON

# 2021/9/3
## Virus investigation
- [记录一次腾讯云服务器进挖矿病毒的事故](https://www.cnblogs.com/-wenli/p/13447361.html)
- [腾讯云服务器遭入侵，安装挖矿木马病毒2](https://blog.csdn.net/u014520797/article/details/117409362)
- [警惕Linux挖矿木马SystemMiner通过SSH爆破入侵攻击](https://blog.csdn.net/qq_36949713/article/details/104670220?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EOPENSEARCH%7Edefault-7.essearch_pc_relevant&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EOPENSEARCH%7Edefault-7.essearch_pc_relevant)

## Safety procedures
- [Git加密存储文件](https://www.mikesay.com/2020/12/16/git-encrypt-file-in-repository/)
- https://docs.github.com/cn/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
- A new secure and operational-efficient way to store your accounts and passwords
- 靠谱的密码强度测试
  - https://strength.buyaocha.com/

# 2021/11/2
## Any way to extract information from `wxid`?