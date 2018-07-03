# Node Tests

A basic example for testing an application by using [Mocha](https://mochajs.org/) for a test framework and [expect](https://github.com/mjackson/expect) for test assertions.

We are making some basic sync and async asserts for the functions in the `utils/utils.js` file but we also testing the Express server in `server/server.js` with [supertest](https://github.com/visionmedia/supertest).

All tests are situated in a respective `{filename}.test.js` file.

To run the tests simply call

```
npm test
```

or
```
npm run test-watch
```
for a continuously running test process.