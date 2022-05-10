# StudentAPI

This project is a school assignment on making an API.<br>

# DESCRIPTION 

This web application contains of a sample database of student profile; including name, id, tuition status. We use this **Student API** to get their profile and update their tuition status. <br>

# COLLABORATOR

Developed by team 15 including:
|Name|ID|Contribution|
|:----|:-----|:---------|
|Nguyễn Thế Dũng|B18DCCN101|Backend,Frontend|
|Đỗ Việt Long|B18DCCN|Backend,Frontend|

# SETUP AND RUN

### Cloning
* In your terminal : <br>
`$git clone https://github.com/yungThe/studentAPI`


### Run
###### Backend
* What you need to install before running this project : **nodeJS, expressJS, nodemon**. <br>
* Command<br>
`$cd StudentAPI`<br>
`$npm start`
###### Frontend
* lorem ipsum

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
*   [Angular](https://angular.io/docs)

# DEVELOPMENT HISTORY

1. First commit (May 8, 2022): 
* GET student
* GET student/:id
* POST student
2. Second commit (May 9, 2022):
* PATCH student tuition status
3. Third commit (May 9, 2022):
* GET invoice
4. Forth commit (upcoming):
* User interface


# LICENSE

Free of charge, to any person obtaining a copy of this software.
