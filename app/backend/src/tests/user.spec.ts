import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('', () => {
  afterEach(sinon.restore);

  it('Seu teste', async () => {
    sinon.stub(User, 'findOne').resolves()
  })
});
