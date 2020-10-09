# KANBAN App
Kanban App is my second portofolios in phase 2 Dublin-Fox Hacktiv8. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### GET /tasks

> Get all tasks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
    "task": [
        {
            "id": 1,
            "title": "makan mamad",
            "description": "pagi hari",
            "category": "backlog",
            "UserId": 1,
            "createdAt": "2020-10-07T01:56:54.082Z",
            "updatedAt": "2020-10-07T01:57:24.060Z",
            "User": {
                "id": 1,
                "email": "mamad@mail.com",
                "password": "$2a$10$TNRCcKJCS6syr7ZTXLUI8egQwVk8aQ/o9hojWDRJbztol7LUSWQVG",
                "organization": "Hactiv8",
                "createdAt": "2020-10-07T01:56:32.884Z",
                "updatedAt": "2020-10-07T01:56:32.884Z"
            }
        }
        ...
    ]
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
_Response (401 - Unauthorized)_
```
{
    "errors": [
        "Failed to authenticate!"
    ]
}
```
_Response (500)_
```
{
  "message": "Internal server error"
}
```

### POST /tasks

> Create new tasks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
not needed
```

_Request Body_
```
{
  "title": "<string>",
  "description": "<string>",
  "category": "<string>",
}
```

_Response (201 - Created)_
```
{
    "task": {
        "id": 6,
        "title": "makan malam",
        "description": "belajar vue js setelah makan malam",
        "category": "done",
        "UserId": 3,
        "updatedAt": "2020-10-08T12:18:22.832Z",
        "createdAt": "2020-10-08T12:18:22.832Z"
    }
}
```

_Response (400 - Bad Request)_
```
{
    "errors": [
        "Title is required",
        "Description is required",
        "Category is required",
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### PUT /tasks/:id

> Update task

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
{
  "id": "<integer>"
}
```

_Request Body_
```
{
  "title": "<string>",
  "description": "<string>",
  "category": "<string>",
}
```

_Response (200 - OK)_
```
{
    "task": {
        "id": 6,
        "title": "belajar component",
        "description": "component vue ",
        "category": "backlog",
        "UserId": 3,
        "createdAt": "2020-10-08T12:18:22.832Z",
        "updatedAt": "2020-10-08T12:26:36.747Z"
    }
}
```

_Response (400 - Bad Request)_
```
{
    "errors": [
        "Title is required",
        "Description is required",
    ]
}
```
_Response (401 - Unauthorized)_
```
{
    "errors": [
        "you aren't authorize"
    ]
}
```

_Response (404 - Not Found)_
```
{
    "errors": [
        "task not found"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### DELETE /tasks/:id

> Delete task

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
{
  "id": "<integer>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "task": {
        "id": 6,
        "title": "belajar component",
        "description": "component vue ",
        "category": "backlog",
        "UserId": 3,
        "createdAt": "2020-10-08T12:18:22.832Z",
        "updatedAt": "2020-10-08T12:26:36.747Z"
    }
}
```
_Response (401 - Unauthorized)_
```
{
    "errors": [
        "you aren't authorize"
    ]
}
```

_Response (404 - Not Found)_
```
{
    "errors": [
        "todo not found"
    ]
}
```

### POST /register

> Create new user

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```

_Request Body_
```
{
  "email": "<string>",
  "password": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 1,
    "email": "kanbanku@mail.com",
    "organization": "Hacktiv8",
    "msg": "register success folks!"
}
```

_Response (400 - Bad Request)_
```
{
    "errors": [
        "email is required",
        " password is required"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### POST /login

> Login user

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```

_Request Body_
```
{
  "email": "<string>",
  "password": "<string>"
}
```

_Response (200 - Created)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJrYW5iYW5AbWFpbC5jb20iLCJpYXQiOjE2MDIxNjA5NDR9.wVsiWF45DUnb6k2G-EfDyeC00RXD_H-fC2FS9NCXBNQ"
}
```

_Response (400 - Bad Request)_
```
{
    "errors": [
        "invalid email or password"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### POST /googleSign

> Login Google Sign

_Request Header_
```
not needed
```
_Request Params_
```
not needed
```

_Request Body_
```
{
    "idToken": "<string>",
    "audience": "<string>"
}
```

_Response (200 - OK)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoibWFnc0BtYWlsLmNvbSIsImlhdCI6MTYwMTQzOTM1M30.4oIcQzfdJpw8_WimrsgcMsx7maw75dXmSUvzpZcawOg"
}
```

_Response (201 - Create)_
```
{
  "idToken": "<string>"
}

```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
