Competency-Browser [![Build Status](https://travis-ci.org/UVU-DigitalMedia/DGM-Competency-Browser.svg?branch=master)](https://travis-ci.org/UVU-DigitalMedia/DGM-Competency-Browser)
======================

This project allows students, faculty, and employers to see the connection between courses and specific competencies.

##Summary
ToDo: Write Summary

##Technologies Used
This project uses a modifided MEAN stack.
We have decided aginst using the express router to serve the front end for the sake of simplicity. Therfore, the project serves the front end staticly from the /app folder. However, the data API will use the new express 4 routing options to provide RESTful endpoint used for data manipulation.

###Frontend
The frontend uses Angular.js and Bootstrap.

###Backend
The back uses Node with the Express framework to serve static files, and provide back end API. The backend will also use MongoDB with Mongoose for data object modeling.

##Getting Started
Node is required.

MongoDB is required. Goto www.mongodb.org to install and find instructions to get it up and running. I recommend using homebrew to install if you are on mac.

####Install Dependancies.
Backend dependancies:

    npm install

Frontend dependancies:

    bower install

Install nodemon. If you are working on the server nodemon will restart the server when you save the files. Otherwise, nodemon isn't needed. See [Nodemon,](https://github.com/remy/nodemon) for more info

    npm install -g nodemon

Install Grunt:

    npm install -g grunt-cli

Install Sass

    sudo su -c "gem install sass"

####Do the Database things and start the server

Start the Mongo server (sudo maybe required.)

    mongod


#Starting the server

THIS HAS CHANGED

Use:

   npm start

The project now has autoreloading using [BrowserSync.](http://www.browsersync.io/) It is a super cool tool, that will auto reload the page anytime you save a file in the /app dir.

The biggest change this brings is the port that it now uses. Typically, it will be port 3000. But it will tell you in the terminal. Instead of going to localhost:8080 it will be localhost:3000. It will open it in a new tab for you.

##Running Grunt

Tasks will be run automatically when you run Grunt, such as concatenation and minification.

    grunt
    grunt watch



##GitHub Workflow
![Github Workflow](http://i.imgur.com/7Qg4Tiu.png?1)

The Above workflow outlines the Git strategy for the RIA2 Class, and also works for most open source projects.

###Keeping your repos in Sync

[Here is the Github Guide to keeping your repo in sync with the main repo.](https://help.github.com/articles/syncing-a-fork/)

Here are the basics. You will have 2 remotes set up on your local machine, one named origin and one named upstream. The upstream remmote points to the main repo and origin points to the user repo on GitHub.

Whenever you would like to get the latest code from the main branch you will do a

    $ git fetch upstream

A git pull is a shortcut command that combines a git fetch with a git merge. A git fetch operation never changes any of your own local branches under refs/heads, and is safe to do without changing your working copy. Therefore, if you would like to merge the code you got with git fetch upstream you then need to do a

    $ get merge upstream/master

Note, you can merge into a different branch than master if you would like. Just make sure whatever branch you would like the upsream master branch to merge into, that is the branch you currently have checked out on your local machine.

After you have merged the main repo code on your local machine. If you would like that on your github repo, a git push is required. Most likely you will work on code first, then push, then pull-request.

### Sycing to other forks

Additionally, you can sync to other users forks. Just follow the the steps above to set up additional remotes that point to the other forks on github.
