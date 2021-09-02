# Insights from the Data

How user data can be visualized to find patterns and make discoveries.

## Find posts a user interacted with

![interacted with](img/interacted_with.png)

```SQL
MATCH
  (u:User {email: "pillsbury.doughboy@gmail.com"}),
  (u)-[:INTERACTED_WITH]->(p:Post)
WHERE NOT
  (u)-[:CREATED]->(p)
RETURN
  u, p
```
