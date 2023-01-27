import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';
import matches from '././utils/matchesMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota "/matches"', () => {
  afterEach(sinon.restore);
  it('Testa se é possível buscar as partidas de maneira correta', async () => {
    sinon.stub(Match, 'findAll').resolves(matches as unknown as Match[]);
    const res = await chai.request(app).get('/matches');
    expect(res.status).to.equal(200);
    // expect(res.body).to.deep.equal(matches);
  });

  it('Testa se ao adicionar a query "inProgress" retorna os dados esperados', async () => {
    const res = matches.filter((item) => item.inProgress === true);
    sinon.stub(Match, 'findAll').resolves(res as unknown as Match[]);
    const { status, body } = await chai.request(app).get('/matches?inProgress=true')
    expect(status).to.equal(200);
    expect(body).to.deep.equal(res);
  });
  
})
