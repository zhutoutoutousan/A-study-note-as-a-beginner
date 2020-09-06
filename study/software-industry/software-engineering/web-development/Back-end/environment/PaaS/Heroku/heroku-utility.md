# Table of Contents
- [Table of Contents](#table-of-contents)
- [Suggestions](#suggestions)
- [RTFM](#rtfm)
- [Tutorials track](#tutorials-track)
- [Heroku CLI](#heroku-cli)
- [Heroku architecture](#heroku-architecture)
  - [Procfile](#procfile)
  - [Dyno](#dyno)
  - [Config var](#config-var)
- [Deployment](#deployment)
- [Addons](#addons)
  - [Database](#database)
    - [Heroku Postgres Starter Tier dev database](#heroku-postgres-starter-tier-dev-database)
- [Language support](#language-support)
- [Troubleshoot](#troubleshoot)
  - [-Heroku login: >IP address mismatch](#-heroku-login-ip-address-mismatch)

# Suggestions
- Don't dig too hard in this note, just go with the flow. Get back after using it for a while

# RTFM
- RTFM scenarios
  - Installation
  - Setting up
  - Quick recap
- [Dev - Heroku](https://devcenter.heroku.com/)
- [Official articles](https://devcenter.heroku.com/articles/)
  - More docs
- [Categories](https://devcenter.heroku.com/categories/)

# Tutorials track
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
  - Completed, if u r a bit rusty on how it's done in a row, revisit it for refreshment
- [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works)
- [Node.js](https://devcenter.heroku.com/categories/nodejs-support)
- [Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
# Heroku CLI
- ```heroku open [sub-site]```
- ```heroku ps:scale web=[number]```
  - Scale the number of web dynos to ```[number]```
- ```heroku ps```
  - Check dyno state
- ```heroku create```
- ```heroku local```
  - Run heroku app locally
- ```heroku config```
  - Check heroku config var
- ```heroku config:set [process.env.[PROP]] = [number]```
  - Set the node.js ```process.env``` property
- ```git add .```
- ```git push heroku main```
- ```heroku run bash```
- ```heroku logs --tail```
- ```heroku pg:psql```
  - Database
# Heroku architecture
## Procfile
- [Doc](https://devcenter.heroku.com/articles/procfile)
- heroku.yml

## Dyno
- Dyno: Think of it as a lightweight container that runs the command specified in the ```Procfile```
- [doc](https://devcenter.heroku.com/articles/dynos)

## Config var
- RTFM
# Deployment
- [Doc](https://devcenter.heroku.com/categories/deploying-with-git)

# Addons
## Database
### Heroku Postgres Starter Tier dev database
- Installation
  - [RTFM](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
  - [More RTFM](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup)
# Language support 
- [Node.js entry](https://devcenter.heroku.com/categories/nodejs-support)
# Troubleshoot
## -Heroku login: >IP address mismatch
- [StackOverflow](https://stackoverflow.com/questions/63363085/ip-address-mismatch-on-signing-into-heroku-cli)
  - ```heroku login -i```