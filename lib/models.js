import neo4j from "neo4j-driver"
const driver = neo4j.driver(
  process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const session = driver.session()

export function createUser(user) {
  const writeTxPromise = session.writeTransaction(tx =>
    tx.run(
      'CREATE (n:User {name: $name, age: $age})',
      {
        name: user.name,
        age: user.age
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

