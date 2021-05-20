<img src="https://static.begin.app/node-faunadb/readme-banner.png" width="655">

[![Begin build status](https://buildstatus.begin.app/dance-wsw/status.svg)](https://begin.com)

A super simple Begin **c**reate **r**ead **u**pdate **d**elete app that exemplifies a basic todo app that uses one static html page and three API endpoints that connect to a FaunaDB database.

# Prerequisites

1. You must go to https://fauna.com/ and set up a FaunaDB account and get a server secret required to run this example

2. Create an `.env` file in the root of this project and add the content below with your server secret added

```sh
@testing
FAUNADB_SERVER_SECRET=Your server secret

@staging
FAUNADB_SERVER_SECRET=Your server secret

@production
FAUNADB_SERVER_SECRET=Your server secret
```

3. Create a database

4. Create a collection named 'todos'

5. Create an index named 'all-todos'

Your dashboard should look like this when you finish:

<img width="100%" alt="faunadb-dashboard" src="https://user-images.githubusercontent.com/76308/119038394-ecc47480-b967-11eb-9f16-e01b985612e1.png">


## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-faunadb)

Deploy your own clone of this app to Begin!

## Getting started

- Start the local dev server: `npm start`
- Lint your code: `npm run lint`
- Run your tests: `npm test`

## Reference

- [FaunaDB](https://docs.begin.com/en/data/faunadb) - Begin x FaunaDB official documentation.
- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
