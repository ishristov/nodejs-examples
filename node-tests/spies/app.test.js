const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
  var dbSpy = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', dbSpy)

  it('should call the spy correctly', () => {
    var spy = expect.createSpy()
    spy('Ivaylo', 90)
    expect(spy).toHaveBeenCalledWith('Ivaylo', 90)
  })

  // Test a function from another file that calls another function
  it('should call saveUser with user object', () => {
    var email = 'something@example.com'
    var password = 'something456'

    app.handleSignup(email, password)
    expect(dbSpy.saveUser).toHaveBeenCalledWith({email, password})
  })
})