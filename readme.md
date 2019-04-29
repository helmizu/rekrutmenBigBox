# Recruitment BigBox

## Content

* Home Page (index.html)
* Server DataAPI (at DataAPI/) using Express and MongoDB

## How to Run the Project

1. Make Sure Your Already Download and install node.js and MongoDB for Running API Server
2. Clone this repo
3. Go to the project directory
4. Install npm modules at server or run at this directory `npm install --prefix DataAPI`
5. Run the app separate with command `npm start --prefix DataAPI` for server
6. Open index.html

## API

### GET Inbox

- Method : GET
- API : <http://localhost:3000/data/message>
- Example Response :

```json
{
    "data": [
        {
            "date": "2019-05-29T03:54:13.389Z",
            "message": "pesan percobaan",
            "type": "message",
            "_id": "5cc67ef29c8dad3e5ceb2f09",
            "__v": 0
        },
        {
            "date": "2019-04-29T03:54:13.389Z",
            "message": "pesan percobaan 1",
            "type": "message",
            "_id": "5cc67f8e9c8dad3e5ceb2f0a",
            "__v": 0
        },
        {
            "date": "2019-04-29T03:54:13.389Z",
            "message": "pesan percobaan 2",
            "type": "message",
            "_id": "5cc67f909c8dad3e5ceb2f0b",
            "__v": 0
        },
        {
            "date": "2019-04-29T03:54:13.389Z",
            "message": "pesan percobaan 3",
            "type": "message",
            "_id": "5cc67f919c8dad3e5ceb2f0c",
            "__v": 0
        },
        {
            "date": "2019-04-29T03:54:13.389Z",
            "message": "pesan percobaan 4",
            "type": "message",
            "_id": "5cc67f929c8dad3e5ceb2f0d",
            "__v": 0
        }
    ]
}
```

### GET Notif

- Method : GET
- API : <http://localhost:3000/data/notification>
- Example Response :

```json
{
    "data": [
        {
            "date": "2019-04-30T09:14:47.808Z",
            "message": "notification 1",
            "type": "notification",
            "category": 3,
            "_id": "5cc6c0e031f22d34fc6f26be",
            "__v": 0
        },
        {
            "date": "2019-04-29T09:14:47.808Z",
            "message": "notification 2",
            "type": "notification",
            "category": 3,
            "_id": "5cc6c0ee31f22d34fc6f26bf",
            "__v": 0
        },
        {
            "date": "2019-04-29T09:14:47.808Z",
            "message": "notification 3",
            "type": "notification",
            "category": 2,
            "_id": "5cc6c0f331f22d34fc6f26c0",
            "__v": 0
        },
        {
            "date": "2019-04-29T09:14:47.808Z",
            "message": "notification 4",
            "type": "notification",
            "category": 1,
            "_id": "5cc6c0f831f22d34fc6f26c1",
            "__v": 0
        },
        {
            "date": "2019-04-29T09:14:47.808Z",
            "message": "notification 5",
            "type": "notification",
            "category": 1,
            "_id": "5cc6c0fa31f22d34fc6f26c2",
            "__v": 0
        }
    ]
}
```

### GET Daily Performance in One Month

- Method : GET
- API : <http://localhost:3000/data/performance>
- Example Response :

```json
{
    "data": [
        {
            "date": "2019-04-19T03:03:36.804Z",
            "targetTime": 7,
            "workTime": 7,
            "achievement": 100,
            "overtime": 4
        },
        {
            "date": "2019-04-20T03:03:36.804Z",
            "targetTime": 0,
            "workTime": 0,
            "achievement": 100,
            "overtime": 0
        },
        {
            "date": "2019-04-21T03:03:36.804Z",
            "targetTime": 0,
            "workTime": 0,
            "achievement": 100,
            "overtime": 0
        },
        {
            "date": "2019-04-22T03:03:36.804Z",
            "targetTime": 7,
            "workTime": 7,
            "achievement": 100,
            "overtime": 0
        }, ...
    ]
}
```

### GET Annual Performance

- Method : GET
- API : <http://localhost:3000/data/performancebyyear>
- Example Response :

```json
{
    "data": [
        {
            "_id": "5cc68bfec1d7770b98615af6",
            "date": "2019-04-19T03:03:36.804Z",
            "targetTime": 7,
            "workTime": 7,
            "achievement": 100,
            "overtime": 4,
            "__v": 0
        },
        {
            "_id": "5cc68be7c1d7770b98615af5",
            "date": "2019-04-20T03:03:36.804Z",
            "targetTime": 0,
            "workTime": 0,
            "achievement": 100,
            "overtime": 0,
            "__v": 0
        }, ...
        {
            "_id": "5cc6b69ea1d1b626f45d6137",
            "date": "2019-05-19T03:03:36.804Z",
            "targetTime": 7,
            "workTime": 7,
            "achievement": 90,
            "overtime": 4,
            "__v": 0
        }
    ]
}
```

### GET Annual Performance for Chart

- Method : GET
- API : <http://localhost:3000/data/performancebyyear/chart>
- Example Response :

```json
{
    "data": [
        {
            "_id": {
                "month": 4,
                "year": 2019
            },
            "achievement": 1100,
            "count": 11
        },
        {
            "_id": {
                "month": 5,
                "year": 2019
            },
            "achievement": 90,
            "count": 1
        }
    ]
}
```

### POST Inbox

- Method : POST
- API : <http://localhost:3000/data/message>
- Body :

```json
{
    "message": "pesan percobaan 1",
}
```

- Example Response :

```json
{
    "date": "2019-04-29T03:54:13.389Z",
    "message": "pesan percobaan 1",
    "type": "message",
    "_id": "5cc67f8e9c8dad3e5ceb2f0a",
    "__v": 0
}
```

### POST Notif

- Method : POST
- API : <http://localhost:3000/data/notification>
- Body :

```json
{
    "message": "notification 1",
    "category": 3
}
```

- Example Response :

```json
{
    "date": "2019-04-30T09:14:47.808Z",
    "message": "notification 1",
    "type": "notification",
    "category": 3,
    "_id": "5cc6c0e031f22d34fc6f26be",
    "__v": 0
}
```

### POST Performance

- Method : POST
- API : <http://localhost:3000/data/performance>
- Body :

```json
{
    "date": "2019-05-19T03:03:36.804Z",
    "targetTime": 7,
    "workTime": 7,
    "achievement": 90,
    "overtime": 4
}
```

- Example Response :

```json
{
    "date": "2019-05-19T03:03:36.804Z",
    "targetTime": 7,
    "workTime": 7,
    "achievement": 90,
    "overtime": 4,
    "_id": "5cc6b69ea1d1b626f45d6137",
    "__v": 0
}
```