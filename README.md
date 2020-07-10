# API - Feedbacks

***

## Database
I decided to use a No-SQL database such as MongoDB because this is a little project and MongoDB is able to handle correctly the relations between the information, furthermore MongoDB is the database in which i consider that i have more relevant experience.

## Running Project
> ```
> git clone https://github.com/Artuuro96/api-feedback.git
> cd api-feedback
> mkdir .env        //you have to add the env vars to running project (PORT and MONGODB_URI)
> npm install --save
> node src/index.js

## API Documentation
You also can read de documentation and test API with swagger on {{host}}/api-docs

#### You have to create a new user or use one of the users that already exist in the database, then you can create a new order or use one of the orders that already exist in the database. Finally you can write and rate with idUser and idOrder the order that you want to rate

***
## users
***

### GET - /api/users/:idUser
Response: 
>``` 
>[
>    {
>        "lastName": "Rodriguez",
>        "_id": "5f080485a119e6ab396b44ff",
>        "name": "Arturo",
>        "username": "arturo96",
>        "__v": 0
>    }
>]
> ```
### GET - /api/users
Response:
>``` 
>[
>    {
>        "lastName": "Rodriguez",
>        "_id": "5f080485a119e6ab396b44ff",
>        "name": "Arturo",
>        "username": "arturo96",
>        "__v": 0
>    },
>    {
>        "lastName": "Huerta",
>        "_id": "5f0820430a9893ba6a5718b1",
>        "name": "Rodrigo",
>        "username": "rudi2000",
>        "__v": 0
>    }
>]
>``` 
### PUT - /api/users/:idUser
Request:
> ```
> body: {
>    "name": "Arturo",
>    "lastName": "Martinez"
>}
> ```
Response:
>``` 
>{
>    "lastName": "Martinez",
>    "_id": "5f080485a119e6ab396b44ff",
>    "name": "Arturo",
>    "username": "arturo96",
>    "__v": 0
>}
>``` 
### POST - /api/users
Request:
> ```
> body: {
>    "name": "Rodrigo",
>    "lastName": "Huerta",
>    "username": "rudi2000"
>}
> ```
Response:
>``` 
>{
>    "lastName": "Huerta",
>    "_id": "5f0820430a9893ba6a5718b1",
>   "name": "Rodrigo",
>    "username": "rudi2000",
>    "__v": 0
>}
>``` 

***
## orders
***
### GET - /api/orders
Response:
>``` 
>[
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product, it arrived in time"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzana Verde",
>                "description": "1 kg Manzana Golden",
>                "price": 85
>            },
>            {
>                "_id": 1,
>                "name": "Sabritas Jalapeño",
>                "description": "Empaque de 350gr",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T06:02:41.832Z",
>       "_id": "5f0804a0a119e6ab396b4500",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 100,
>        "__v": 0
>    }
>]
>``` 
### GET - /api/orders/:idOrder
Response:
>``` 
>[
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product, it arrived in time"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzana Verde",
>                "description": "1 kg Manzana Golden",
>                "price": 85
>            },
>            {
>                "_id": 1,
>                "name": "Sabritas Jalapeño",
>                "description": "Empaque de 350gr",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T06:02:41.832Z",
>       "_id": "5f0804a0a119e6ab396b4500",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 100,
>        "__v": 0
>    }
>]
>``` 
### POST - /api/orders
Request
> ```
>body: {
>    "idUser": "5f080485a119e6ab396b44ff",
>    "groceries":[{
>        "_id": 0,
>        "name": "Manzana Verde",
>        "description": "1 kg Manzana Golden",
>        "price": 85
>    }, {
>        "_id": 1,
>        "name": "Sabritas Jalapeño",
>        "description": "Empaque de 350gr",
>        "price": 15
>    }],
>    "feedback": {},
>    "total": 100
>}
> ```
Response:
>``` 
>{
>    "groceries": [
>        {
>            "_id": 0,
>           "name": "Manzana Verde",
>            "description": "1 kg Manzana Golden",
>            "price": 85
>        },
>        {
>            "_id": 1,
>            "name": "Sabritas Jalapeño",
>            "description": "Empaque de 350gr",
>            "price": 15
>        }
>    ],
>    "orderDate": "2020-07-10T06:02:41.832Z",
>    "_id": "5f0804a0a119e6ab396b4500",
>    "idUser": "5f080485a119e6ab396b44ff",
>    "total": 100,
>    "__v": 0
>}
>``` 
### PUT - /api/orders/:idOrder
Request
>``` 
>body: {
>    "idUser": "5f07ee25e648559803f1d245",
>    "groceries":[{
>        "_id": 0,
>        "name": "Manzana Roja",
>        "description": "1 kg Manzana",
>        "price": 85
>    }, {
>        "_id": 1,
>        "name": "Sabritas Queso",
>        "description": "Empaque de 350gr",
>        "price": 15
>    }],
>    "feedback": {},
>    "total": 100
>}
>``` 
Response
>``` 
>{
>    "groceries": [
>        {
>            "_id": 0,
>            "name": "Manzana Roja",
>            "description": "1 kg Manzana",
>            "price": 85
>        },
>        {
>            "_id": 1,
>            "name": "Sabritas Queso",
>            "description": "Empaque de 350gr",
>            "price": 15
>        }
>    ],
>    "orderDate": "2020-07-10T04:27:12.049Z",
>    "_id": "5f07ee34e648559803f1d247",
>    "idUser": "5f07ee25e648559803f1d245",
>    "total": 100,
>    "__v": 0
}
>``` 
### DELETE - /api/orders/:idOrder
Response:
>``` 
>No Content
>``` 
***
## feedbacks
***

### GET - /api/feedbacks
Response: 
> ```
>[
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product, it arrived in time"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzana Verde",
>                "description": "1 kg Manzana Golden",
>                "price": 85
>            },
>            {
>                "_id": 1,
>                "name": "Sabritas Jalapeño",
>                "description": "Empaque de 350gr",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T06:02:41.832Z",
>        "_id": "5f0804a0a119e6ab396b4500",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 100,
>        "__v": 0
>    },
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzanita Sol",
>                "description": "2lt",
>                "price": 40
>            },
>            {
>                "_id": 1,
>                "name": "Coca Cola",
>                "description": "1lt",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T08:58:14.311Z",
>        "_id": "5f082dabb806e3d6dfcda1c0",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 65,
>        "__v": 0
>    }
>    .
>    .
>    .
>]
>```

### GET - /api/feedbacks/lasts
Response: 
> ```
>[
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product, it arrived in time"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzana Verde",
>                "description": "1 kg Manzana Golden",
>                "price": 85
>            },
>            {
>                "_id": 1,
>                "name": "Sabritas Jalapeño",
>                "description": "Empaque de 350gr",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T06:02:41.832Z",
>        "_id": "5f0804a0a119e6ab396b4500",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 100,
>        "__v": 0
>    },
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzanita Sol",
>                "description": "2lt",
>                "price": 40
>            },
>            {
>                "_id": 1,
>                "name": "Coca Cola",
>                "description": "1lt",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T08:58:14.311Z",
>        "_id": "5f082dabb806e3d6dfcda1c0",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 65,
>        "__v": 0
>    }
>    .
>    .
>    .
>]
>```

### GET - /api/feedbacks/rating/:rating
Response: 
> ```
>[
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product, it arrived in time"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzana Verde",
>                "description": "1 kg Manzana Golden",
>                "price": 85
>            },
>            {
>                "_id": 1,
>                "name": "Sabritas Jalapeño",
>                "description": "Empaque de 350gr",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T06:02:41.832Z",
>        "_id": "5f0804a0a119e6ab396b4500",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 100,
>        "__v": 0
>    },
>    {
>        "feedback": {
>            "rate": 5,
>            "review": "Its a great product"
>        },
>        "groceries": [
>            {
>                "_id": 0,
>                "name": "Manzanita Sol",
>                "description": "2lt",
>                "price": 40
>            },
>            {
>                "_id": 1,
>                "name": "Coca Cola",
>                "description": "1lt",
>                "price": 15
>            }
>        ],
>        "orderDate": "2020-07-10T08:58:14.311Z",
>        "_id": "5f082dabb806e3d6dfcda1c0",
>        "idUser": "5f080485a119e6ab396b44ff",
>        "total": 65,
>        "__v": 0
>    }
>    .
>    .
>    .
>]
>```

### POST - /api/feedbacks/:idOrder
Request:
> ```
> headers: {
>     userid: 5f080485a119e6ab396b44ff
> }
>
> body: {
>    "feedback": {
>       "rate": 5,
>        review": "Its a great product, it arrived in time"
>    }
> }
> ```
Response: 
>``` 
> {
>    "feedback": {
>        "rate": 5,
>        "review": "Its a great product, it arrived in time"
>    },
>    "groceries": [
>        {
>            "_id": 0,
>            "name": "Manzana Verde",
>            "description": "1 kg Manzana Golden",
>            "price": 85
>        },
>        {
>            "_id": 1,
>            "name": "Sabritas Jalapeño",
>            "description": "Empaque de 350gr",
>            "price": 15
>        }
>    ],
>    "orderDate": "2020-07-10T06:02:41.832Z",
>    "_id": "5f0804a0a119e6ab396b4500",
>    "idUser": "5f080485a119e6ab396b44ff",
>    "total": 100,
>    "__v": 0
>}
> ```

### PUT - /api/feedbacks/:idOrder
Request:
> ```
> headers: {
>     userid: 5f080485a119e6ab396b44ff
> }
>
> {
>    "feedback": {
>       "rate": 3,
>        review": "Good product"
>    }
> }
> ```
Response:
>```
>{
>    "feedback": {
>        "rate": 5,
>        "review": "Its the best product in the world"
>    },
>    "groceries": [
>        {
>            "_id": 0,
>            "name": "Manzana Verde",
>            "description": "1 kg Manzana Golden",
>            "price": 85
>        },
>        {
>            "_id": 1,
>            "name": "Sabritas Jalapeño",
>            "description": "Empaque de 350gr",
>            "price": 15
>        }
>    ],
>    "orderDate": "2020-07-10T06:02:41.832Z",
>    "_id": "5f0804a0a119e6ab396b4500",
>    "idUser": "5f080485a119e6ab396b44ff",
>    "total": 100,
>    "__v": 0
>}
>```

### DELETE - /api/feedbacks/:idOrder
Request:
> ```
> headers: {
>     userid: 5f080485a119e6ab396b44ff
> }
>
Response:
>```
>No Content
>```
