# Micellanaeous
- [Prettier - playground](https://prettier.io/playground/)
```
    > npm i -D prettier

  "scripts": {
    "format": "prettier \"src/**/*.{js,html}\" -- write",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

# Vscode extension

- Useful: Vscode-->Ctrl+,-->Search prettier--> format on save
- Require config


# Troubleshoot
## When "prettier.requireConfig" is true and no config exists extension should not try to load Prettier
- [When "prettier.requireConfig" is true and no config exists extension should not try to load Prettier](https://github.com/prettier/prettier-vscode/issues/1161)
- Accompanied with the ```CLI``` command in ```package.json```, check if HTML and CSS are affected by ```prettier```, maybe it's some other formatter