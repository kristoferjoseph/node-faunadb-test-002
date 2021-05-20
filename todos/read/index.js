const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async function read() {
  let todos

  try {
    let result = await client.query(
      q.Map(
        q.Paginate(
         q.Match(
            q.Index('all_todos')
          )
        ),
        q.Lambda(
          'ref',
          q.Get(q.Var('ref'))
        )
      )
    )

    let data = result.data
    todos = data.sort((a, b) => a.ts - b.ts)
      .map(t => {
        t.data.key = t.ref.id
        return t.data
      })

  }
  catch(err) {
    console.error(err)
    todos = []
  }

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(todos)
  }
}
