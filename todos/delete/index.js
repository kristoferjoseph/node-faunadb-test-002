const arc = require('@architect/functions')
const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

exports.handler = async function destroy(req) {
  let ref = arc.http.helpers.bodyParser(req).key

  try {
    await client.query(
      q.Delete(
        q.Ref(
          q.Collection('todos'),
          ref
        )
      )
    )
  }
  catch(err) {
    console.error(JSON.stringify(err))
  }

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
