# node-rest-api test

## Prerequisites
Before running the application, make sure you have the following installed:
1. NodeJS (v18)
2. NPM (v9)

## Installation
1. Clone the repository: `git clone https://github.com/easycodescript/node_rest_api.git`
2. Navigate to the project directory: `cd node_rest_api`
3. Install the dependencies: `npm install`

## Usage

To start the service, run the following command:
```shell
npm start
```

With Postman:

POST localhost:3000/meetup/
Body:
{
	"name": "meetup 1",
    "date": "02/03/2024",
    "start": "15:00:00",
    "address":"Bozenstr. 32",
    "city": "Bozen"
}

GET localhost:3000/meetup
GET localhost:3000/meetup/1

PATCH localhost:3000/meetup/1
Body:
{
    "address":"Bozenstr. 22"
}

POST localhost:3000/talk
Body:
{
	"name": "talk 1",
    "abstract": "Description 1",
    "speaker": "Yundi Li",
    "meetupId": 1
}

POST localhost:3000/talk
Body:
{
	"name": "talk 2",
    "abstract": "Description 2",
    "speaker": "Yundi Li Junior",
    "meetupId": 1
}

GET localhost:3000/talk

DELETE localhost:3000/meetup/1

