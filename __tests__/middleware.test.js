const { logger } = require('../src/middleware/logger');

describe('Middleware', () => {
  //Test thatv logger calls console.log
  it('logs via console.log', () => {
    jest.spyOn(console,'log').mockImplementation();
    //Phase 1: set up
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = () => {};

    //Action
    logger(req, res, next);

    //Phase 3: Assertions
    //What do we assert here? How do we know console.log was called?
    expect(console.log).toHaveBeenCalledWith('GET', '/');
  });

  //Test that logger calls `next()` to pass control to the next middleware
  it('calls next()', () => {
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = jest.fn();

    //Action
    logger(req, res, next);

    //Assetion
    expect(next).toHaveBeenCalled();
  });
});

