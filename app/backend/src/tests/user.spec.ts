import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import User from '../database/models/User';
import { correctUser, userObject } from './utils/userMock';
import { response } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('', () => {
  beforeEach(sinon.restore);

  it('Token criado com sucesso', async () => {
    const res = await chai.request(app).post('/login').send(correctUser)

    expect(res.status).to.equal(200);
  });

  it('Não consegue criar o token, falta o email', async () => {
    const res = await chai.request(app).post('/login').send({ ...correctUser, email: undefined });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"email" is required');
  })
});
