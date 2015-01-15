DGM-Competency-Browser
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

####Do the Database things and start the server

Start the Mongo server (sudo maybe required.)

    mongod


Start the server:
(using Nodemon)

    nodemon server.js
 
    
(or without Nodemon)

    node server.js
    

    
Then open a web browser to http://localhost:8080/ to see magic.

