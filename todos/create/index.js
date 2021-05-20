const arc = require('@architect/functions')
const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)

  try {
    await client.query(
      q.Create(
        q.Collection('todos'),
        { data: { ...todo } }
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
