# Express Lists

## Introduction

This is a fully RESTful Express app, that includes full CRUD actions (Create, Read, Update and Delete) and Express authentication.

![screen shot 2018-04-05 at 7 13 34 pm](https://user-images.githubusercontent.com/29477363/38383908-a3c5015e-3905-11e8-8e45-20bb2aacbc3f.png)

## Description

* Contains one model (list)
* Full CRUD actions
* Fully RESTful
* Includes a seeds file
* Is responsive
![screen shot 2018-04-05 at 7 16 53 pm](https://user-images.githubusercontent.com/29477363/38384031-fe05efde-3905-11e8-9c29-3cbaed093fb2.png)


## Style

Styling it up using Bulma overall and pure flexbox for a responsive navbar. Icons courtesy of Fontawesome.

## Express Authentication

I have added session authentication so that you can register a new user and login. 

* I have secured the `new`, `create`, `edit`, `update` and `delete` routes, so that only logged in users perform those actions.
* I have hidden the edit and delete buttons if you're not logged in.
* Added flash messages.

