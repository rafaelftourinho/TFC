import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/User';
import { correctUser, incorretPasswordUser } from './utils/userMock';
import Bcrypt from '../auth/Bcript';

chai.use(chaiHttp);

const { expect } = chai;

describe('', () => {
  beforeEach(sinon.restore);

  it('Login feito com sucesso', async () => {
    const res = await chai.request(app).post('/login').send(correctUser)

    expect(res.status).to.equal(200);
  });

  it('Testa se o email é necessário para o login', async () => {
    const res = await chai.request(app).post('/login').send({ ...correctUser, email: undefined });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"email" is required');
  });

  it('Testa se o password é necessário para o login', async () => {
    sinon.stub(User, 'findOne').resolves(incorretPasswordUser as User);
    const { body } = await chai.request(app).post('/login').send({ ...correctUser, password: undefined });
    expect(body.message).to.equal('"password" is required');
  });

  it('Testa se o email informado incorretamente gera erro para logar', async () => {
    sinon.stub(User, 'findOne').resolves(null);
    const { body, status } = await chai.request(app).post('/login').send({ ...correctUser, email: 'alagoano@admin.com' });
    expect(body.message).to.equal('Incorrect email or password');
    expect(status).to.equal(401);
  });

  it('Testa se o passweord informado corretamente gera erro para logar', async () => {
    const { body, status } = await chai.request(app).post('/login').send({ ...correctUser, password: 'password_errado' });
    expect(body.message).to.equal('Incorrect email or password');
    expect(status).to.equal(401);
  });

  it('Verifica se o middleware barra a entrada sem o token', async () => {
    sinon.stub(User, 'findOne').resolves(correctUser as User);
    sinon.stub(Bcrypt, 'compare').returns(false);

    const res = await chai.request(app).get('/login').send({ ...correctUser, email: 'alagoano@admin.com' });
    expect(res.status).to.equal(404);
  })
});
