# Gamut Social Media

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![chakra](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![neo4j](	https://img.shields.io/badge/Neo4j-018bff?style=for-the-badge&logo=neo4j&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![gamut banner](docs/img/gamut_banner.png)

A mobile-first social media app that shows users a feed of posts tailored to their interests based on previous interactions with the app.

## Contents

- [Getting Started](#getting-started)
- [Contributing](CONTRIBUTING.md)
- [API docs](docs/API-guide.md)
- [Tech Stack](#tech-stack)
- [Insights from the Data](docs/Learnings.md)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js
- Chakra
- React
- Neo4j

## App Components

### [HOME](components/feed)

Developed by [Emily Liu](https://github.com/yyliu11)

![image](https://user-images.githubusercontent.com/79947457/132080603-07e812ae-96e4-4491-9a87-9896b6b70110.png)

Logged in user lands on the Home page. He is able to see the posts from the categories selected at signup by scrolling up and scrolling down. He can also vote in favor of or against the posts. Min/max voting triggers animations which adds more fun to user's interaction with our app. 
