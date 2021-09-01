import neo4j from "neo4j-driver"
const driver = neo4j.driver(
  process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const session = driver.session()

export function createUser(user) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(
      `MERGE (n:User {id: apoc.create.uuid()})
       SET n.username = $username, n.name = $name, n.email = $email, n.birthDate = $birthDate, n.city = $city, n.state = $state, n.gender = $gender`,
      {
        username: user.username,
        name: user.name,
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

export function getPosts() {
  const readTxPromise = session.readTransaction(tx =>
    tx.run(
      'MATCH (p: Post) RETURN p'
    )
  )

  return new Promise((resolve, reject) => {
    readTxPromise.then((result) => {
      if (result) {
        const records = result.records.map(element => {
          return element.get(0).properties;
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
    tx.run(
      `MERGE (n: Post {id: apoc.create.uuid()})
       SET n.username = $username, n.category = $category, n.body = $body, n.title = $title, n.interactions = $interactions, n.date = $date`,
      {
        username: postData.username || 'guest',
        category: postData.category || '',
        body: postData.body || '',
        title: postData.title || '',
        interactions: (Math.floor(Math.random() * 1000)),
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
