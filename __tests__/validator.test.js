describe('validator', () => {
    // Test that validator calls `next()` to pass control to the next middleware
  it('calls next()', () => {
    const req = { method: 'GET', url: '/', params: { name: 'Von' } };
    const res = {};
    const next = jest.fn();

    //Action
    validator(req, res, next);

    // Assertion
    expect(next).toHaveBeenCalled();
  });
  it('fails without a name param', () => {
    const req = { method: 'GET', url: '/', params: {} };
    const res = {};
    const next = jest.fn();

    expect(() => {
      validator(req, res, next);
    }).toThrow();
  });
});
