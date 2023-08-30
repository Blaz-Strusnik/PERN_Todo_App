This app uses Sequlize ORM for databases interactions
Sequlize is set up for PostgreSQL database.
The connection string is located in database.ts file.
If you change the database you will have to change the
credetnials in connection string and modify the config,js
file. Then if everything is setup correctly you enter
in the terminal command  npx sequelize-cli db:seed:all
and the datbase will be popluated.

If you are starting from sratch with sequilze then follow the procedure on this link
https://sequelize.org/docs/v6/other-topics/migrations/.


Testing the endpoints

Best way of testing the endpoints is with Postman unitl i implement Swagger UI.

The seeded user credentials are located in  the 20230830144931-demo-user.js file

http://localhost:${if port number taken change port number in server.ts file}

Auth endpoints

You will get an access token from one or other auth endpoint,
with which you will access the tasks endpoints on Postman.

For auth login use this endpoint and json data
POST /auth/login
{
    "username": "john_doe,
    "password": "password123"
}

For auth signup use this endpoint and json data
POST /auth/signup

{
    "username": "john_doe,
    "password": "password123"
}


Task endpoints:
You can't acccess task endoints if you are not loged in

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id'
DELETE /api/tasks/:id






