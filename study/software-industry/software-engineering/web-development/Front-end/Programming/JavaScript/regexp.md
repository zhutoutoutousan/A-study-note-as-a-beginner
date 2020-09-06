# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Mental model](#mental-model)
  - [Position](#position)
    - [```^``` - beginning](#---beginning)
    - [- Word boundries](#ulliword-boundriesliul)
  - [Occurence](#occurence)
    - [- quantifier](#ulliquantifierliul)
  - [Match](#match)
    - [Any](#any)
    - [Literal characters](#literal-characters)
  - [Special characters](#special-characters)
- [Use RegExp in JavaScript](#use-regexp-in-javascript)
  - [RegExp object](#regexp-object)
  - [Methods](#methods)
    - [```RegExp.prototype.exec()```](#regexpprototypeexec)
    - [```RegExp.prototype.test()```](#regexpprototypetest)
  - [Applications](#applications)
  - [Front-end](#front-end)
    - [Password Validation](#password-validation)
    - [E-mail](#e-mail)
- [Tools and tutorials](#tools-and-tutorials)


# Overview
- Get familiar with RegExp in real-life scenarios for some time then we can talk
- It seems pointless to categorize operators in the beginning
- This seems to be dependent from the topic JavaScript, consider upgrade this note.

# Mental model
## Position
### ```^``` - beginning
### - Word boundries
## Occurence
### - quantifier
## Match
### Any
- ```.``` Dot. Matches any character except line breaks.
### Literal characters
- duh
## Special characters
- Special characters are dissipated around the note for practical purposes
- If you want to match special characters literally, you need to use backslash
- Gallary of speical characters
  - ```\```
    - ```\d```: 0~9
    - ```\Q* [Special characters] *\E```: Match ```[Special characters]``` literally
  - ```^```
  - ```$```
  - ```.```
  - ```|```
  - ```?```
  - ```*```
  - ```+```
  - ```(```
  - ```)```
  - ```[```
  - ```{```
    - Repetition operator

# Use RegExp in JavaScript
## RegExp object
```javascript
let re = new RegExp(string,rules);
```

## Methods
### ```RegExp.prototype.exec()```
### ```RegExp.prototype.test()```

## Applications
## Front-end
### Password Validation
```javascript
/*
^ Beginning




*/
const passWordValidation = /^(?=.*\d)/

```
### E-mail

# Tools and tutorials
- [RegEx101](https://regex101.com/)
  - A good source to learn the syntax
- [regexr](regexr.com)
- [regular-expression - tutorial](https://www.regular-expressions.info/tutorial.html)
  - Features
    - This site tutorial explains how a regular expression engine works on the inside
  - Process(Walkthrough)
    - Progress: Special character
    - Navigation
      - There is some explanations of colored texts in the regular expression.
- Suggestions
  - Still need a site for **functionality** to **RegExp**

- Reference
  - [RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)