// can also write this as import { db } from '../src/db'; right?

const { db } = require('../src/db');

// clears our database

describe('models', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it('has a Boxer and Coder model', () => { });
});
