# Formatting
- Eslint
```json
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}

```

- git
  - .gitignore
```
node_modules/
.cache/
dist/
coverage/
.vscode/
.env
```

- Jest