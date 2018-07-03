const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello')
        .end(done)
    })
  })

  describe('GET /users', () => {
    it('should show me in the users response', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Ivaylo',
            age: 90
          })
        })
        .end(done)
    })
  })

  describe('GET unknown', () => {
    it('should return 404 for unknown urls', (done) => {
      request(app)
        .get('/random')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          })
        })
        .end(done)
    })
  })
})