const arc = require('@architect/functions')
const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

exports.handler = async function update(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let params = req.pathParameters
  let ref = params && params.id
  todo.completed = !!todo.completed

  try {
    await client.query(
      q.Update(
        q.Ref(
          q.Collection('todos'),
          ref
        ),
        { data: { ...todo } }
      )
    )
  }
  catch(err) {
    console.error(err)
  }

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
