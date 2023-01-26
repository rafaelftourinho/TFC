import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import TeamModel from '../database/models/Team';
import teams from './utils/teamMock';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('', () => {
  beforeEach(sinon.restore)

  it('Buscando todos os times com sucesso na rota "/teams"', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(teams as TeamModel[]);
    const res = await chai.request(app).get('/teams');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body[0]).to.be.an('object');
    expect(res.body[0]).to.have.property('teamName');
    expect(res.body).to.have.length(8);
  })

  it('Buscando os times através do id na rota "teams/:id"', async () => {
    sinon.stub(TeamModel, 'findByPk').resolves(teams[5] as TeamModel);
    const res = await chai.request(app).get('/teams/6');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.deep.equal(teams[5]);
    expect(res.body.id).to.equal(6);
    expect(res.body.teamName).to.equal('Ferroviária');
  })
})
