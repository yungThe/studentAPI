# StudentAPI

This project is a school assignment on making an API.<br>

# DESCRIPTION 

This web application contains of a sample database of student profile; including name, id, tuition status. We use this **Student API** to get their profile and update their tuition status. <br>

# SETUP AND RUN

### Cloning
* In your terminal : <br>
`$git clone https://github.com/yungThe/studentAPI`<br>
`$cd studentAPI`<br>
* What you need to install before running this project : **nodeJS, expressJS, nodemon**. <br>
### Run
* Command
`$npm start`

# TESTING

We use [Postman](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/) to test the API.<br>
After `$npm start` the server is ready at [localhost:8080](http://localhost:8080/), proceed to Postman to test your API, there are GET, POST and PATCH method ready to be tested.<br>
| **Method**             |**Link**                          | **Request body**             |
|------------------------|:--------------------------------|:----------------------------|
|GET                     | localhost:8080/student<br>localhost:8080/student/:id<br>localhost:8080/event|none|
|POST|localhost:8080/student|Json formated body. Including id, firstname, lastname, year, total, status|
|PATCH|localhost:8080/student/:id|Json formated body. Including only status|

# TECHNOLOGY USED

*   [NodeJS](https://nodejs.org/en/docs/)
*   [ExpressJS](https://expressjs.com/en/guide/routing.html)

# LICENSE

Free of charge, to any person obtaining a copy of this software.
