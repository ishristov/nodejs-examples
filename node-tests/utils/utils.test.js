const expect = require('expect')
const utils = require('./utils')

describe('Utils', () => {
  // Add numbers
  it('should add two numbers', () => {
    var res = utils.add(11, 22)
    
    expect(res).toBe(33)
  })
  
  it('should async add two numbers', (done) => {
    var res = utils.asyncAdd(10, 20, (sum) => {
      expect(sum).toBe(30)
      done()
    })
  })
  
  // Square numbers
  it('should square a number', () => {
    var res = utils.square(5)
  
    expect(res).toBe(25)
  })
  
  it('should async square a number', (done) => {
    var res = utils.asyncSquare(4, (sqr) => {
      expect(sqr).toBe(16)
      done()
    })
  })
  
  // Names
  it('should verify first and last name are set', () => {
    var user = {
      age: '90',
      location: 'Sofia'
    }
  
    var res = utils.setName(user, 'Ivaylo Hristov')
  
    expect(res).toInclude({
      firstName: 'Ivaylo',
      lastName: 'Hristov'
    })
  })
})
  