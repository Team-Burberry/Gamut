# API Usage Guide

## Get Posts for Feed

`GET /api/getPosts` Retrieves a list of posts.

| Parameter | Type | Description |
| --- | --- |---|
| email | string | Specify user  |

### Request Body Shape

- Guest

     ```json
     {
          "email": ""
     }
     ```

- Registered User

     ```json
     {
          "email": "pillsbury.doughboy@gmail.com"
     }
     ```

### Response

`Status: 200 OK`

```json
[
    {
        "date": 1630438523155,
        "id": "093ead3e-ae69-4f4f-a399-61ce366e2cdd",
        "title": "Rams House!",
        "body": "Rams are the best in the west!",
        "category": "Sports",
        "interactions": 3,
        "username": "JohnJ"
    },
    {
        "date": 1630448146126,
        "id": "46559ee3-2e16-4d6f-8a1b-96a086a70695",
        "title": "Donda",
        "category": "Music",
        "body": "Kanye is the goat",
        "interactions": 2,
        "username": "BobLoblaw"
    },
    // ...
]
```

## Get Posts for Explore Page

`GET /api/getTrendingPosts` Retrieves a list of posts.

| Parameter | Type | Description |
| --- | --- |---|
| category | string | Specify category |

### Request Body Shape

- All Categories
  - empty request body

- Specific Category

     ```json
     {
          "category": "Technology"
     }
     ```

### Response

`Status: 200 OK`

```json
[
    {
        "date": 1630473334018,
        "id": "cef9f515-c4b4-4370-9457-c362e40cc686",
        "title": "End Of The World!",
        "body": "Robots will take over the world!",
        "category": "Technology",
        "interactions": 1,
        "username": "Matt"
    },
    {
        "date": 1630476372515,
        "id": "82ffd2d3-7e9b-40db-add8-082c4df33c12",
        "title": "neo4j is superior",
        "body": "Nothing beats a good graph database. The feeling of a good Cypher query",
        "category": "Technology",
        "interactions": 1,
        "username": "Matt"
    },
    // ...
]
```
