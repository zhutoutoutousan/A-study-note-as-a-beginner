# Table of Contents
- [Table of Contents](#table-of-contents)
- [Suggestions](#suggestions)
- [RTFM](#rtfm)
- [Tutorials track](#tutorials-track)
- [Heroku CLI](#heroku-cli)
  - [Commands](#commands)
  - [Operations](#operations)
    - [Deploy an app](#deploy-an-app)
    - [Check logs](#check-logs)
    - [Check dyno](#check-dyno)
- [Heroku architecture](#heroku-architecture)
  - [Procfile](#procfile)
  - [Dyno](#dyno)
- [Deployment](#deployment)
- [Language support](#language-support)
- [Troubleshoot](#troubleshoot)
  - [-Heroku login: >IP address mismatch](#-heroku-login-ip-address-mismatch)

# Suggestions
- Don't dig too hard in this note, just go with the flow. Get back after using it for a while

# RTFM
- RTFM scenarios
  - Installation
  - Setting up
- [Dev - Heroku](https://devcenter.heroku.com/)
- [Official articles](https://devcenter.heroku.com/articles/)
  - More docs
- [Categories](https://devcenter.heroku.com/categories/)

# Tutorials track
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)



  
# Heroku CLI
## Commands
- ```heroku open```
- ```heroku ps:scale web=[number]```
  - Scale the number of web dynos to ```[number]```
- ```heroku ps```
  - Check dyno state
- ```heroku create```
## Operations
### Deploy an app
### Check logs
```
heroku logs --tail
```
### Check dyno

# Heroku architecture
## Procfile
- [Doc](https://devcenter.heroku.com/articles/procfile)
- heroku.yml

## Dyno
- Dyno: Think of it as a lightweight container that runs the command specified in the ```Procfile```
- [doc](https://devcenter.heroku.com/articles/dynos)
# Deployment
- [Doc](https://devcenter.heroku.com/categories/deploying-with-git)

# Language support 
- [Node.js entry](https://devcenter.heroku.com/categories/nodejs-support)
# Troubleshoot
## -Heroku login: >IP address mismatch
- [StackOverflow](https://stackoverflow.com/questions/63363085/ip-address-mismatch-on-signing-into-heroku-cli)
  - ```heroku login -i```