# Table of Contents
- [Table of Contents](#table-of-contents)
- [Generic terminal skills](#generic-terminal-skills)
  - [Reset the language for system folder names](#reset-the-language-for-system-folder-names)
- [User input](#user-input)
  - [Fcitx](#fcitx)
    - [Switch different languages to input](#switch-different-languages-to-input)
    - [Troubleshoot](#troubleshoot)
      - [Ctrl+Space doens't work](#ctrlspace-doenst-work)
- [Operating system configuration](#operating-system-configuration)
  - [Install deb files](#install-deb-files)
    - [Troubleshoot](#troubleshoot-1)
  - [Upgrade system](#upgrade-system)
- [File system skills](#file-system-skills)
  - [Move](#move)
  - [Copy](#copy)
- [Hardware skills](#hardware-skills)
  - [Bluetooth](#bluetooth)
  - [Power](#power)
- [Networking](#networking)
  - [Connect to Wifi using Linux terminal](#connect-to-wifi-using-linux-terminal)
    - [Ubuntu](#ubuntu)
# Generic terminal skills
## Reset the language for system folder names
```
LANG=C xdg-user-dirs-update --force
```
For more see
- [Change the system folder name back to English](https://askubuntu.com/questions/398555/change-the-system-folder-name-back-to-english)
# User input
## Fcitx
### Switch different languages to input
### Troubleshoot
#### Ctrl+Space doens't work
- [Official guide](https://fcitx-im.org/wiki/FAQ#When_use_Ctrl_.2B_Space.2C_Fcitx_cannot_be_triggered_on)

# Operating system configuration
## Install deb files
```bash
sudo apt install /path/xxx.deb
```
### Troubleshoot
- “E: Unable to locate package”
## Upgrade system
```
sudo apt-get upgrade
```
# File system skills
## Move
## Copy
# Hardware skills
## Bluetooth
## Power

# Networking
## Connect to Wifi using Linux terminal
### Ubuntu