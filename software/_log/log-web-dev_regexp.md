# 2021/3/29
## Uncaught SyntaxError: Invalid regular expression: /\s?*\,\s?*/: Nothing to repeat
The same on chrome DevTool when changing `*` to `+`
`const splitMultipleVar = string => string.split(/\s?*\,\s?*/);`

Strange, when you debug on `regex101` website, it sort of works