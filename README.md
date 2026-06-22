<h1>User CRUD API</h1>

A RESTful User Management API built using Express.js, Node.js, MongoDB, and Mongoose. This project provides CRUD (Create, Read, Update, Delete) operations for managing users.

Features:
- Create a new user
- Get all users
- Get a user by ID
- Update user details
- Delete a user
- Input validation
- MongoDB database integration
- Proper HTTP status codes and error handling

Tech Stack:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

API Endpoints:
- Create User
POST /api/users

Request Body:
{
  "name": "yourname",
  "email": "myEmail@mail.com",
  "password": "123456"
}

- Get All Users
GET /api/users

- Get User By ID
GET /api/users/:id

- Update User
PUT /api/users/:id

- Delete User
DELETE /api/users/:id

Status Codes:
200 - Success
201 - Created
400 - Bad Request
404 - Not Found
500 - Internal Server Error

Testing:
All API endpoints were tested using Postman.

Author:
Created as part of the Syntecxhub Backend Development Internship.
<br>
<br>
<img width="987" height="637" alt="Screenshot 2026-06-22 143912" src="https://github.com/user-attachments/assets/bf739b0e-f8f2-481d-b6a2-e05e96184c43" />

<img width="982" height="441" alt="Screenshot 2026-06-22 144004" src="https://github.com/user-attachments/assets/b38f5c5f-e4b2-418e-bde0-e320921589ab" />

<img width="978" height="398" alt="Screenshot 2026-06-22 144238" src="https://github.com/user-attachments/assets/e7e725cf-aa68-4cf5-85a8-2e4fbdf91e12" />

<img width="976" height="601" alt="Screenshot 2026-06-22 144348" src="https://github.com/user-attachments/assets/27359efd-7f20-4a6f-a5c8-f4312f347683" />

<img width="978" height="457" alt="Screenshot 2026-06-22 144422" src="https://github.com/user-attachments/assets/1dfac6e3-8aad-4e85-9177-5bca179268ed" />

