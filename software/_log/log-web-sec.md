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