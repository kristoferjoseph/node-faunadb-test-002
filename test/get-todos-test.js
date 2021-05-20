let tiny = require('tiny-json-http')
let test = require('tape')
let sandbox = require('@architect/sandbox')

// this starts a sandbox environment for the tests to excecute in.
test('start', async t => {
  t.plan(1)
  await sandbox.start()
  t.ok(true, 'started')
})

// test case will go here



// this ends sandbox
test('end', t => {
  t.plan(1)
  await sandbox.end()
  t.ok(true, 'ended')
})
