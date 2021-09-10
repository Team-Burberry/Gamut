# Gamut Social Media

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![chakra](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![neo4j](https://img.shields.io/badge/Neo4j-018bff?style=for-the-badge&logo=neo4j&logoColor=white)
![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![gamut banner](docs/img/gamut_banner.png)

A mobile-first social media experience tailored to users' interests based on previous interactions with the app.

## Contents

- [Contributing](CONTRIBUTING.md)
- [API docs](docs/API-guide.md)
- [Insights from the Data](docs/Learnings.md)
- [App Components and Contributors](#app-components)

---

<p align="center">
  <img alt="app demo" src="docs/img/demo.gif">
</p>

## App Components

### [Log In and Sign Up](components/login)

- Developed by [Amalia Bryant](https://github.com/cookieByte4130)

### [Home Feed](components/feed)

- Developed by [Emily Liu](https://github.com/yyliu11)
- Logged in user lands on the Home page. He is able to see the posts from the categories selected at signup by scrolling up and scrolling down. He can also vote in favor of or against the posts. Min/max voting triggers animations which adds more fun to user's interaction with our app.

### [Explore & Search](components/search)

- Developed by [Sophie Partovi](https://github.com/sadafpartovi)
- On the explore page, users can search and filter posts by category. Also, users are able to see the trending posts. However, only registered users can intreact with posts and vote in favor of or against the posts.

### [Create a Post](components/new-post)

- Developed by [Logan Qiu](https://github.com/logan-qiu)
- Once logged in, users will be able to create posts with one of the categories retrieved from the Neo4j database, and once completed, a new post will be logged in the database, and be rendered in home feed, search tab, as well as on the profile page.

### [Profile](components/profile)

- Developed by [Logan Qiu](https://github.com/logan-qiu)
- Logged in users will be able to see their profile image, personal information and all the posts he/she created. Users are able to also edit and update their personal information and once submitted, it will update automatically without refreshing the page. Lastly, once users click on the sign out button, they will be signed out and re-directed to the log in page.

### [Backend Architecture](docs/API-guide.md) and [Database](docs/Learnings.md)

- Developed by [Corey Robinson](https://github.com/robin-son1), [Matt Heindel](https://github.com/matt-heindel), and [Tyler Peterson](https://github.com/tylerpetersen02)
- We chose a graph database to represent Users, Posts, and Interactions for efficient querying patterns when looking for posts to suggest to users based on what categories they've interacted with before.
