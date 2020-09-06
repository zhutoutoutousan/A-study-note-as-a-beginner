# Table of Contents
- [Table of Contents](#table-of-contents)
- [RTFM](#rtfm)
- [Tutorials track](#tutorials-track)
- [Heroku CLI](#heroku-cli)
  - [Commands](#commands)
  - [Operations](#operations)
    - [Deploy an app](#deploy-an-app)
    - [Check logs](#check-logs)
- [Heroku architecture](#heroku-architecture)
  - [Procfile](#procfile)
- [Deployment](#deployment)
- [Language support](#language-support)
- [Troubleshoot](#troubleshoot)
  - [-Heroku login: >IP address mismatch](#-heroku-login-ip-address-mismatch)
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
- ```heroku create```
## Operations
### Deploy an app
### Check logs
```
heroku logs --tail
```

# Heroku architecture
## Procfile
- [Doc](https://devcenter.heroku.com/articles/procfile)
- heroku.yml
# Deployment
- [Doc](https://devcenter.heroku.com/categories/deploying-with-git)

# Language support 
- [Node.js entry](https://devcenter.heroku.com/categories/nodejs-support)
# Troubleshoot
## -Heroku login: >IP address mismatch
- [StackOverflow](https://stackoverflow.com/questions/63363085/ip-address-mismatch-on-signing-into-heroku-cli)
  - ```heroku login -i```