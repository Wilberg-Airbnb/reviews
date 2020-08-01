# Airbnb-Detailed Page Review Service


## Related Projects

  - https://github.com/Wilberg-Airbnb/reviews
  - https://github.com/Wilberg-Airbnb/reservation
  - https://github.com/Wilberg-Airbnb/location
  - https://github.com/Wilberg-Airbnb/description
  - https://github.com/Wilberg-Airbnb/suggestion
  - https://github.com/Wilberg-Airbnb/host
  - https://github.com/Wilberg-Airbnb/photos

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Endpoints](#Endpoints)
1. [Test](#Test)
1. [Docker](#docker)
1. [Installing Dependencies](#Installing_Dependencies)

## Usage

> run mysql -u root -p < MYSQL/schema.sql to seed the data into database then run command line: npm run server to start the server and npm run react to compile the jsx files.

>To see the fully depolyed version of the website, navigate to http://3.12.169.208:1000/:listingId

- ListingId from 1-99

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Docker
- Docker
- MYSQL 8.0.20

## Endpoints
This service has two endpoints (/api/reviews/:listingId) and (/api/reviews/:listingId?type=review).
FIrst endpoint gives an array with that listingId's reviews where each object in that array holds information of a review. Second endpoint gives an average review score calcualted for that listingId.

Endpoint: /api/reviews/:listingId
```
[{"id":691,"listingId":19,"firstName":"Nellie","lastName":"Koepp","avatarURL":"https://s3.amazonaws.com/uifaces/faces/twitter/krasnoukhov/128.jpg","comments":"Sed omnis corrupti reiciendis eligendi libero consequatur dolores. Vitae nisi qui maiores amet beatae excepturi. Facere recusandae odio. Qui enim qui maxime molestiae dolorem sunt laudantium tempore repellendus. Quia facilis perspiciatis cum eos magni impedit. Quibusdam quod est id eligendi ut non illo eaque.","createdAt":"2017-09-02T01:08:15.000Z","cleanliness":5,"accuracy":3,"communication":5,"location":4,"checkIn":4,"value":5,"average":4.33}]
```

Endpoint: /api/reviews/:listingId?type=review
```
4.21
```

## Test
This service uses Jest, Enzyme and pupetteer for testing. From within the root directory run

$npm run test

## Docker
> For linux, docker-compose needs to be installed separately.

$docker-compose up --build

## Installing_Dependencies

From within the root directory:

$npm install -g webpack
$npm install



