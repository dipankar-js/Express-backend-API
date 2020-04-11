
# BootCamper API

Backend API for a bootcamp company to manage bootcamps, courses, reviews, users and authentication

## Indices

* [Bootcamps](#bootcamps)

  * [Get all Bootcamps](#1-get-all-bootcamps)
  * [Get Single Bootcamps](#2-get-single-bootcamps)
  * [Create a Bootcamp](#3-create-a-bootcamp)
  * [Update a Bootcamp](#4-update-a-bootcamp)
  * [Delete a Bootcamp](#5-delete-a-bootcamp)
  * [Get all Bootcamps by distance](#6-get-all-bootcamps-by-distance)
  * [Pagination](#7-pagination)
  * [Photo upload](#8-photo-upload)

* [Courses](#courses)

  * [Get all Courses](#1-get-all-courses)
  * [Get Courses by Bootcamp](#2-get-courses-by-bootcamp)
  * [Create a Course](#3-create-a-course)
  * [Update a Courses](#4-update-a-courses)
  * [Delete a Courses](#5-delete-a-courses)

* [Authentication](#authentication)

  * [Register  user](#1-register--user)
  * [Login](#2-login)
  * [Get LoggedIn user](#3-get-loggedin-user)
  * [Forgot Password](#4-forgot-password)
  * [Reset Password](#5-reset-password)
  * [Update User](#6-update-user)
  * [Change Password](#7-change-password)
  * [Logout user](#8-logout-user)

* [Users](#users)

  * [Get Users](#1-get-users)
  * [Get a single User](#2-get-a-single-user)
  * [Create a user](#3-create-a-user)
  * [Update user](#4-update-user)
  * [Delete User](#5-delete-user)

* [Reviews](#reviews)

  * [Get reviews](#1-get-reviews)
  * [Get reviews by Bootcamp](#2-get-reviews-by-bootcamp)
  * [Get Single reviews](#3-get-single-reviews)
  * [Add review](#4-add-review)
  * [Update review](#5-update-review)
  * [Delete review](#6-delete-review)


--------


## Bootcamps
Bootcamps CRUD functionality



### 1. Get all Bootcamps


Fetch all bootcamps from Databases which includes pagination, filtering etc


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/
```



### 2. Get Single Bootcamps


Fetch single bootcamp from Database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5e90e8f05bddbb3bc075a455
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 3. Create a Bootcamp


Add a bootcamp in the Database. User must be authenticated and have publisher or admin access.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{		"name": "React Bootcamp",
		"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
		"website": "https://devworks.com",
		"phone": "(111) 111-1111",
		"email": "enroll@devworks.com",
		"address": "233 Bay State Rd Boston MA 02215",
		"careers": ["Web Development", "UI/UX", "Business"],
		"housing": true,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```



### 4. Update a Bootcamp


Update a specific bootcamp by ID in the Database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5e5ac0537380631790dc58a4
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	 "name": "Edu-Uncle Bootcamp"
}
```



### 5. Delete a Bootcamp


Delete a bootcamp permanantly from the database.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/5e90e8f05bddbb3bc075a455
```



### 6. Get all Bootcamps by distance


Get Bootcamps within a radius of specific zipcode


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/radius/02118/10
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 7. Pagination


Get Bootcamp by Pagination


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| limit | 1 |  |
| page | 2 |  |



### 8. Photo upload


Upload a photo for a specific bootcamp


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	 "name": "Edu-Uncle Bootcamp"
}
```



## Courses
Create , Read , Update and Delete Course



### 1. Get all Courses


Get all courses API


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 2. Get Courses by Bootcamp


Get all the courses belongs to a particular bootcamp.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 3. Create a Course


Create a course in a particular bootcamp by providing the bootcamp ID


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/courses
```



***Body:***

```js        
{
		"title": "React Development",
		"description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
		"weeks": 12,
		"tuition": 12000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": true,
		"user": "5d7a514b5d2c12c7449be045"
}
```



### 4. Update a Courses


Update a course by their ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



***Body:***

```js        
{
	"title":"React Developer"
}
```



### 5. Delete a Courses


Remove a course by their ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



## Authentication
Routes for user Authentication



### 1. Register  user


Route for registering a user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"name" : "John Doe",
	"email":"john@gmail.com",
	"password":"123456",
	"role":"user"
	
}
```



### 2. Login


Route for user Login using email & password.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"email":"publisher@gmail.com",
	"password":"123456"
	
}
```



### 3. Get LoggedIn user


Get the details of a loggedIn user by sending the JWT token in header


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 4. Forgot Password


Genrerate password token and send Email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```



***Body:***

```js        
{
	"email":"barman498@gmail.com"
}
```



### 5. Reset Password


PUT request for reset password using reset-token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/9b787b3dfe09c93c4a4641869a585ad0e14621de
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"password":"235689"
}
```



### 6. Update User


update user route for a loggedIn user


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"email":"barman498@gmail.com",
	"name":"Dipankar Barman"
}
```



### 7. Change Password


Change password route for frontEnd


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"currentPassword":"235689",
	"newPassword":"123456"
}
```



### 8. Logout user


Clear token from cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



## Users
CRUD operation for users,accessible only for ADMIN



### 1. Get Users


Get all the list of users saved in Database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



### 2. Get a single User


Get a single user by their ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc038
```



### 3. Create a user


Create a user route


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```



***Body:***

```js        
{
	"name":"Aarushi Sharma",
	"email":"aarushi@gmail.com",
	"password":"123456"
}
```



### 4. Update user


Update a user by their ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/5e908cb6f04d834cdcd86fc1
```



***Body:***

```js        
{
	"name":"Aarushi Sharma",
	"email":"aarushikSUDIM@gmail.com"
}
```



### 5. Delete User


Delete a user by their ID


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/5e908cb6f04d834cdcd86fc1
```



## Reviews
Manage reviews for bootcamps



### 1. Get reviews


Get all reviews route


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews
```



### 2. Get reviews by Bootcamp


Get all reviews of a particular bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/reviews
```



### 3. Get Single reviews


Get a single review by their ID and populate bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be024
```



### 4. Add review


Add a review for a specific bootcamp by user or ADMIN


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5e90dab508121747f89df878/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
		"title": "Testing another review!",
		"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra feugiat mauris id viverra. Duis luctus ex sed facilisis ultrices. Curabitur scelerisque bibendum ligula, quis condimentum libero fermentum in. Aenean erat erat, aliquam in purus a, rhoncus hendrerit tellus. Donec accumsan justo in felis consequat sollicitudin. Fusce luctus mattis nunc vitae maximus. Curabitur semper felis eu magna laoreet scelerisque",
		"rating": "5"
}
```



### 5. Update review


Update a particular review by their ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/5e90dafc08121747f89df87a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



***Body:***

```js        
{
	"title":"Updating the bootcamp"
}
```



### 6. Delete review


Delete a review route


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/reviews/5e90dafc08121747f89df87a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Data |



---
[Back to top](#bootcamper-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-04-11 18:34:16 by [docgen](https://github.com/thedevsaddam/docgen)
