# Instruction to run

1. clone the repository
2. create a .env file in the root directory
3. add

```
   PORT=3000
   DB_HOST=mysql
   DB_USER=user
   DB_PASSWORD=Mysql@123
   DB_NAME=mysqltest
   DB_PORT=3306
```

in the .env file

4. run

```
sudo docker-compose up -d
```

# The endpoints are:

## To create user

use post request
http://localhost:{{PORT}}/api/user

add the body in the request

```
{
  "firstname":"john",
  "lastname":"doe"
}
```

## To get all users

use get request

http://localhost:{{PORT}}/api/user

## To get a single user by id

use get request and replace :id with the id of user

http://localhost:{{PORT}}/api/user/:id

## To update the user lastname to K

use the put request and replace the :firstname with the firstname of user

http://localhost:{{PORT}}/api/user/:firstname

## To delete user by firstname

use the delete request and replace the :firstname with the firstname of user

http://localhost:{{PORT}}/api/user/:firstname
