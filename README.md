# StudentAPI

This project is a school assignment on making an API.<br>

# DESCRIPTION 

This web application contains of a sample database of student profile; including name, id, tuition status. We use this **Student API** to get their profile and update their tuition status. <br>

# COLLABORATOR

Developed by team 15 including:
|Name|ID|Contribution|
|:----|:-----|:---------|
|Nguyễn Thế Dũng|B18DCCN101|Backend,Frontend|
|Đỗ Việt Long|B18DCCN343|Backend,Frontend|
<<<<<<< HEAD
|Phạm Tuấn Dũng|B16DCDT050|Frontend|
=======
|Phạm Tuấn Dũng|B18DCDT050|Frontend|
>>>>>>> 0a1d0f50d228b4105227077f77dd2bf2b811e79f

# SETUP AND RUN

### Cloning
* In your terminal : <br>
<<<<<<< HEAD
`$git clone https://github.com/yungThe/studentAPI`<br>


### Run
* What you need to install before running this project : **nodeJS, expressJS, nodemon**,**angular**. <br>
* Back-end
`$cd studentAPI`<br>
`$npm start`<br>
*Front-end
`$npm install` or `npm --force install`<br>
`$npm start`<br>
=======
`$git clone https://github.com/yungThe/studentAPI`


### Run
###### Backend
* What you need to install before running this project : **nodeJS, expressJS, nodemon**. <br>
* Command<br>
`$cd StudentAPI`<br>
`$npm start`
>>>>>>> 0a1d0f50d228b4105227077f77dd2bf2b811e79f

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
*   [Angular]()

# DEVELOPMENT HISTORY

1. First commit (May 8, 2022): 
* GET student
* GET student/:id
* POST student
2. Second commit (May 9, 2022):
* PATCH student tuition status
3. Third commit (May 9, 2022):
* GET invoice
<<<<<<< HEAD
4. Forth commit (May 11, 2020):
* Front-end
=======
>>>>>>> 0a1d0f50d228b4105227077f77dd2bf2b811e79f


# LICENSE

Free of charge, to any person obtaining a copy of this software.
