# Table of Contents
- [Table of Contents](#table-of-contents)
- [Navigation](#navigation)
  - [Visual](#visual)
  - [File system](#file-system)
  - [Terminal](#terminal)
  - [Navigate through the application](#navigate-through-the-application)
  - [Navigate through code](#navigate-through-code)
  - [Searching](#searching)
    - [Exclude commented code from searches](#exclude-commented-code-from-searches)
      - [Use regExp](#use-regexp)
      - [Reference](#reference)
  - [Editing](#editing)
    - [Resources](#resources)
  - [Resources](#resources-1)
- [Tools](#tools)
  - [Command palette](#command-palette)
  - [Extensions](#extensions)
    - [JavaScript](#javascript)
    - [Template engine](#template-engine)
    - [Front-end frameworks](#front-end-frameworks)
    - [npm](#npm)
    - [Markdown](#markdown)
- [Language](#language)
  - [JavaScript](#javascript-1)
  - [Markdown](#markdown-1)
- [Troubleshooting](#troubleshooting)
  - [ENV](#env)
    - [running scripts is disabled on this system](#running-scripts-is-disabled-on-this-system)
- [Manuals](#manuals)
- [Wanna expand your vscode skills later?](#wanna-expand-your-vscode-skills-later)
- [Future improvements?](#future-improvements)
- [Resources](#resources-2)


# Navigation
## Visual
- Split screen using Ctrl+| to 2 screens and 3 screens by my choice: ?
- Remove split
  - Empty it
- Switch between splits: Ctrl+1, Ctrl+2...
- Move a tab to another split: Ctrl+Alt+Rightarrow/Leftarrow.
  - Check out [this](https://stackoverflow.com/questions/44018175/visual-studio-code-hotkey-to-move-a-tab-from-one-of-two-split-editors-to-anothe)
  - Doesn't work with Ubuntu
- Open this tab in a new window: Ctrl+K O
- Open a new window with the same workspace: Ctrl+Shift+P dupl-->Workspaces: Duplicate Workspace in New Window
- Move to certain number of line in code: Ctrl+G
## File system
- Open a folder: Ctrl+K Ctrl+O
- Search files by name: Ctrl+P
- When searching files using *Ctrl+P*, open a file in another tab in the same split:
  - Check out [this](https://stackoverflow.com/questions/38713405/open-files-always-in-a-new-tab)
## Terminal
- Terminal can't execute some commands but the system terminal can
## Navigate through the application
- Toggle Explorer: Ctrl+Shift+E 
  - In markdown file, Ctrl+N create an empty file, Ctrl+Shift+E toggle, Ctrl+W Exit
  - Also can move focus on it, enter the combination again to backtrack the point of focus
- Open another window: Ctrl+Shift+N
- Hide/Display side bar: Ctrl+B(In markdown file, Ctrl+N create an empty file, Ctrl+B toggle, Ctrl+W Exit)
- Toggle debug: Ctrl+Shift+D
- Toggle Extensions: Ctrl+Shift+X
## Navigate through code
- I want to scroll down/up using just the keyboard: Ctrl+Up/Down
- I want to search backwards: Ctrl+F, Shift+Enter
## Searching
### Exclude commented code from searches
#### Use regExp
```regexp
^(?![ \t]*//).*your_search_term
^~(:b*//).*your_search_term
```
Q: What about /* */?
#### Reference
[Exclude comments when searching in Visual Studio](https://stackoverflow.com/questions/11314366/exclude-comments-when-searching-in-visual-studio)

[Exclude Commented Code from Searches](https://developercommunity.visualstudio.com/idea/354547/exclude-commented-code-from-searches.html)

["Find and Replace" add options to EXCLUDE lines "With a Comment" and "If Text was found in a Commented area of the line"](https://developercommunity.visualstudio.com/content/idea/368691/find-and-replace-add-options-to-exclude-lines-with.html)

## Editing 
- I want to edit multiple positions using just the keyboard:
    - Linux: Ctrl+Shift+Up/Down/Left/Right

### Resources
[multiple cursors](https://stackoverflow.com/questions/29953479/multiple-cursors-in-visual-studio-code)

## Resources
[Code navigation](https://code.visualstudio.com/docs/editor/editingevolved)
# Tools
## Command palette
## Extensions
### JavaScript
### Template engine
### Front-end frameworks
### npm
### Markdown

# Language
## JavaScript
- Repeat a code pattern for N times
## Markdown
- Bold: Ctrl+B






# Troubleshooting
## ENV
###  running scripts is disabled on this system
```
sass : File C:\Users\Administrator\AppData\Roaming\npm\sass.ps1 cannot be loaded because running scripts is disabled on this 
system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ sass --version
+ ~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
Normal in windows 10 CLI


# Manuals
[Visual Studio Code - Keyboard shortcut for Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

# Wanna expand your vscode skills later?
[10 Tricks Every Developer Should Know in Visual Studio Code](https://dzone.com/articles/10-tricks-every-developer-should-know-in-visual-st)


# Future improvements?
- When I was programming JavaScript with vscode, I'd really like a list of global variables, is there any?
  - What to input in the search engine?

# Resources
[Visual Code Studio](https://code.visualstudio.com/docs/)