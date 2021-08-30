import neo4j from "neo4j-driver"
const driver = neo4j.driver(
  process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const session = driver.session()

export async function userCreate(user) {
  try {
    const result = await session.writeTransaction(tx =>
      tx.run(
        'CREATE (n:User {name: $name, age: $age})',
        {
          name: user.name,
          age: user.age
        }
      )
    )
  } finally {
    await session.close()
  }
}


// on application exit:
// await driver.close()
