import hello = require('../src/module');

describe('test', () => {
  it('succeeds', () => {
    expect(hello('there')).toEqual('Hello from there');
  })
})
