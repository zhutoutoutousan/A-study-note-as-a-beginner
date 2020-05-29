# Table of Contents
- [Table of Contents](#table-of-contents)
- [Navigation](#navigation)
  - [File system](#file-system)
  - [Terminal](#terminal)
  - [Navigate through the application](#navigate-through-the-application)
  - [Navigate through code](#navigate-through-code)
  - [Exclude commented code from searches](#exclude-commented-code-from-searches)
    - [Use regExp](#use-regexp)
    - [Reference](#reference)
  - [Editing](#editing)
    - [Resources](#resources)
  - [Resources](#resources-1)
- [Tools](#tools)
  - [Command palette](#command-palette)
- [Shorthands and keyboard shortcuts](#shorthands-and-keyboard-shortcuts)
- [Resources](#resources-2)
# Navigation
## File system
- Open a folder: Ctrl+K Ctrl+O
## Terminal
- Terminal can't execute some commands but the system terminal can
## Navigate through the application
- Toggle Explorer: Ctrl+Shift+E !Doesn't seem to work XD
- Open another window: Ctrl+Shift+N
- Hide/Display side bar: Ctrl+B
## Navigate through code
- I want to scroll down/up using just the keyboard: Ctrl+Up/Down
- I want to search backwards: Ctrl+F, Shift+Enter
## Exclude commented code from searches
### Use regExp
```regexp
^(?![ \t]*//).*your_search_term
^~(:b*//).*your_search_term
```
Q: What about /* */?
### Reference
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

# Shorthands and keyboard shortcuts

# Resources
[Visual Code Studio](https://code.visualstudio.com/docs/)