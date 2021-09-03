import neo4j from "neo4j-driver"
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const session = driver.session()

export function createUser(user) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(` MERGE
        (n: User { email: $email })
      ON CREATE SET
        n.id = apoc.create.uuid(),
        n.username = $username,
        n.email = $email,
        n.birthDate = $birthDate,
        n.city = $city,
        n.state = $state,
        n.gender = $gender
      ON MATCH SET
        n.username = $username,
        n.birthDate = $birthDate,
        n.city = $city,
        n.state = $state,
        n.gender = $gender
      `,
      {
        username: user.username,
        email: user.email,
        birthDate: user.birthDate,
        city: user.city,
        state: user.state,
        gender: user.gender
      }
    )
  )

  return new Promise((resolve, reject) => {
    writeTxPromise.then((result) => {
      if (result) {
        resolve(result)
      } else {
        reject('failed')
      }
    })
  })
}

export function getUserInfo(email) {
  // console.log(email);
  const readTxPromise = session.readTransaction(tx =>
    tx.run(`
      MATCH
        (u: User {email: $email})
      RETURN
        u
      `,
      {
        email: email
      }
    )
  )

  return new Promise((resolve, reject) => {
    readTxPromise.then((result) => {
      if (result) {
        resolve(result.records[0].get(0).properties)
      } else {
        reject('failed')
      }
    })
  })

}

export function updateInterests(interests, email) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(`
      MATCH
        (u:User {email: $email}), (c:Category)
      WHERE
        c.group IN $interests
      CREATE
        (u)-[r:INTERESTED_IN]->(c)
      `,
      {
        email: email,
        interests: interests
      }
    )
  )

  return new Promise((resolve, reject) => {
    writeTxPromise.then((result) => {
      if (result) {
        resolve(result)
      } else {
        reject('failed')
      }
    })
  })
}

export function updateInteraction(postData) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(`
      MATCH
        (u:User {email: $email}), (p: Post {id: $postId})
      MERGE
        (u)-[r:INTERACTED_WITH {value: $interaction}]->(p)
      `,
      {
        email: postData.email,
        postId: postData.postId,
        interaction: postData.interaction
      }
    )
  )

  return new Promise((resolve, reject) => {
    writeTxPromise.then((result) => {
      if (result) {
        resolve(result)
      } else {
        reject('failed')
      }
    })
  })
}

export function getPosts() {
  const readTxPromise = session.readTransaction(tx =>
    tx.run(`
      MATCH
        (p: Post)<-[r:INTERACTED_WITH]-(u: User),
        (p: Post)<-[:CREATED]-(c: User)
      RETURN
        p, count(r) AS count, c.username
      LIMIT
        50
      `
    )
  )

  return new Promise((resolve, reject) => {
    readTxPromise.then((result) => {
      if (result) {
        const records = result.records.map(element => {
          const postInfo =  element.get(0).properties;
          postInfo.interactions = element.get(1).low;
          postInfo.username = element.get(2);
          return postInfo;
        });
        resolve(records)
      } else {
        reject('failed')
      }
    })
  })

}

export function getMyPosts(email) {
  email = email || '';
  const readTxPromise = session.readTransaction(tx =>
    tx.run(`
      MATCH
        (p: Post)<-[r:INTERACTED_WITH]-(u: User),
        (p: Post)<-[:CREATED]-(c: User)
      WHERE
        c.email = $email
      RETURN
        p, count(r) AS count, c.username
      LIMIT
        50
      `,
      {
        email: email
      }
    )
  )

  return new Promise((resolve, reject) => {
    readTxPromise.then((result) => {
      if (result) {
        const records = result.records.map(element => {
          const postInfo =  element.get(0).properties;
          postInfo.interactions = element.get(1).low;
          postInfo.username = element.get(2);
          return postInfo;
        });
        resolve(records)
      } else {
        reject('failed')
      }
    })
  })

}

export function getTrendingPosts(category) {
  const readTxPromise = session.readTransaction(tx =>
    tx.run(`
      MATCH
        (p: Post)<-[r:INTERACTED_WITH]-(u: User),
        (p: Post)<-[:CREATED]-(c: User)
      WHERE
        p.category CONTAINS $category
      RETURN
        p, count(r) AS count, c.username
      ORDER BY
        count DESC
      LIMIT
        50
      `,
      {
        category: category || ''
      }
    )
  )

  return new Promise((resolve, reject) => {
    readTxPromise.then((result) => {
      if (result) {
        const records = result.records.map(element => {
          const postInfo =  element.get(0).properties;
          postInfo.interactions = element.get(1).low;
          postInfo.username = element.get(2);
          return postInfo;
        });
        resolve(records)
      } else {
        reject('failed')
      }
    })
  })

}

export function createPost(postData) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(`
      MATCH
        (u: User {email: $email}), (c: Category {group: $category})
      CREATE
        (u)-[:CREATED]->(p: Post {
          id: apoc.create.uuid(),
          category: $category,
          body: $body,
          title: $title,
          date: $date
        })
      CREATE
        (p)-[:INCLUDED_IN]->(c), (u)-[:INTERACTED_WITH {value: 0}]->(p)
      `,
      {
        category: postData.category || '',
        email: postData.email || '',
        body: postData.body || '',
        title: postData.title || '',
        date: Date.now()
      }
    )
  )

  return new Promise((resolve, reject) => {
    writeTxPromise.then((result) => {
      if (result) {
        resolve(result)
      } else {
        reject('failed')
      }
    })
  })
}
