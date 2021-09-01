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
