# API Usage Guide

## Contents

- [getPosts](#get-posts-for-feed)
- [getMyPosts](#get-posts-for-profile)
- [getTrendingPosts](#get-posts-for-explore-page)
- [getUserInfo](#get-user-info)
- [createUser](#create-user)
- [updateInterests](#update-user-interests)
- [createPost](#create-post)
- [updateInterests](#update-user-interests)
- [updateInteraction](#update-interaction)

---

## Get Posts for Feed

`GET /api/getPosts`

| Parameter | Type |
| --- | --- |
| email | string |

### Request

- Guest

     ```JavaScript
     axios.get('/api/getPosts');
     ```

- Registered User

     ```JavaScript
     axios.get('/api/getPosts', {
          params: {
               email: "pillsbury.doughboy@gmail.com"
          }
     });
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

---

## Get Posts for Profile

`GET /api/getMyPosts`

| Parameter | Type |
| --- | --- |
| email | string |

### Request

- Guest

     ```JavaScript
     axios.get('/api/getMyPosts');
     ```

- Registered User

     ```JavaScript
     axios.get('/api/getMyPosts', {
          params: {
               email: "pillsbury.doughboy@gmail.com"
          }
     });
     ```

### Response

`Status: 200 OK`

```json
[
    {
        "date": 1630559840791,
        "id": "618891c4-5309-4525-8ac3-3e35de74a29c",
        "title": "Logan is the best",
        "category": "Religion",
        "body": "ask Zadok about it",
        "interactions": 1,
        "username": "PillsburyDoughBoy"
    },
    {
        "date": 1630559443454,
        "id": "fbb42d3e-d1ef-4c3d-ba58-7cf42afda386",
        "title": "You need to pay me now ",
        "category": "Celebrity",
        "body": "Venmo me for QA testing ",
        "interactions": 1,
        "username": "PillsburyDoughBoy"
    },
    // ...
]
```

---

## Get Posts for Explore Page

`GET /api/getTrendingPosts`

| Parameter | Type |
| --- | --- |
| category | string |

### Request

- All Categories

     ```JavaScript
     axios.get('/api/getTrendingPosts');
     ```

- Specific Category

     ```JavaScript
     axios.get('/api/getTrendingPosts', {
          params: {
               category: "Technology"
          }
     });
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

---

## Get User Info

`GET /api/getUserInfo`

| Parameter | Type |
| --- | --- |
| email | string |

### Request

```JavaScript
axios.get('/api/getUserInfo', {
     params: {
          email: "pillsbury.doughboy@gmail.com"
     }
});
```

### Response

`Status: 200 OK`

```json
{
    "gender": "Male",
    "city": "Sacramento",
    "id": "2b0a3840-8c98-4eda-94ca-7035393c094a",
    "state": "CA",
    "birthDate": "1630382373725",
    "email": "pillsbury.doughboy@gmail.com",
    "username": "PillsburyDoughBoy"
}
```

---

## Create User

`POST /api/createUser`

| Parameter | Type |
| --- | --- |
| userName | string |
| email | string |
| birthDate | string |
| city | string |
| state | string |
| gender | string |

### Request Body Shape

```JavaScript
axios.post('/api/createUser', {
     username: "PillsburyDoughBoy",
     email: "pillsbury.doughboy@gmail.com",
     birthDate: "1630382373725",
     city: "Sacramento",
     state: "CA",
     gender: "Male"
});
```

### Response

`Status: 201 Created`

---

## Update User Interests

`POST /api/updateInterests`

| Parameter | Type |
| --- | --- |
| email | string |
| interests | array of strings |

### Request

```JavaScript
axios.post('/api/updateInterests', {
     email: "pillsbury.doughboy@gmail.com",
     interests: ["Food", "Politics"]
});
```

### Response

`Status: 201 Created`

---

## Create Post

`POST /api/createPost`

| Parameter | Type |
| --- | --- |
| category | string |
| email | string |
| body | string |
| title | string |

### Request

```JavaScript
axios.post('/api/createPost', {
    category: "Food",
    email: "pillsbury.doughboy@gmail.com",
    body: "I have the best buns ;)",
    title: "Tasty Treats"
});
```

### Response

`Status: 201 Created`

---

## Update User Interests

`POST /api/updateInterests`

| Parameter | Type |
| --- | --- |
| email | string |
| interests | array of strings |

### Request

```JavaScript
axios.post('/api/updateInterests', {
    email: "pillsbury.doughboy@gmail.com",
    interests: ["Food", "Politics"]
});
```

### Response

`Status: 201 Created`

---

## Update Interaction

`POST /api/updateInteraction`

| Parameter | Type
| --- | ---
| email | string |
| postId | string |
| interaction | number between -100 and 100 |

### Request

```JavaScript
axios.post('/api/updateInteraction', {
    email: "pillsbury.doughboy@gmail.com",
    postId: "8d80cbfc-2520-407b-a0df-7ba33d429bfd",
    interaction: -100
});
```

### Response

`Status: 201 Created`
