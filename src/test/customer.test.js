const { expect } = require('chai');
const request = require('supertest-as-promised');
const app = require('../server');

describe('#Get Customer', () => {
    it('should return json success true', (done) => {
        request(app)
        .get('/api/customer')
        .expect(200)
        .then((res) => {
          expect(res.body.success).to.equal(true);
          done();
        })
        .catch(done);
    })
})