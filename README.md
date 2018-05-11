Pet Weather App API

Pet Weather App API is a node.js application which communicate with MySql server database vis HTTP request.
/list_pets  returns the list of all the pet from the database in JSON formate.
/list_pets?id=22  returns the apecific pet information by pet id from the database in JSON formate.







Pet Weather App API Setup 

1.Assuming  that you have a free Heroku account, any code editor. Make sure Node.js, git and npm installed locally or globally.


install the Heroku Command Line Interface (CLI) (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
Once installed, you can use the heroku command from your command shell.
Example: 
Heroku login

clone the sample application so that you have a local version of the code that you can then deploy to Heroku
Example: 

git clone https://github.com/heroku/node-js-getting-started.git

cd node-js-getting-started



4.Copy/paste 4 file from this repository into your local project which you just cloned in the above step.
    Example: 
    Package.json, Package-lock, index.js, views folder

5.Deploy the App locally
    Run the following command:

Npm install
Npm install cool-ascii-faces
Heroku create
Git add .
Git commit -m “init commit”
Git push Heroku master
Heroku ps:scale web=1
Heroku local


open http://localhost:5000/list_pets  in the browser to list all the pet from the database
open http://localhost:5000/list_pets?id=22  in the browser to view specific pet from the database

for more help go to source :https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

If still find difficulty in setup, I have also included word document (setup.docx) for better understanding.









FYI


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
