# 2021/7/27
## Error: SSL Error: SELF_SIGNED_CERT_IN_CHAIN' while using npm
https://medium.com/@jonatascastro12/understanding-self-signed-certificate-in-chain-issues-on-node-js-npm-git-and-other-applications-ad88547e7028
- Worked Solution
  - Windows 10: Navigate to `C:\Program Files\nodejs\node_modules\npm`, there's an `.npmrc` file that set the prefix to `${APPDATA}\npm`, but `APPDATA` doesn't exist, so it showed `EISDIR` error. Just delete it 