const chai = require('chai');
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const app = require('../../src/server');
const expect = chai.expect;

chai.config.includeStack = true;

after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('Customer Api', () => {
  let user = {
    firstName: 'Valerie',
    lastName: 'Bantilan',
    email: 'valeriebantilan@gmail.com'
  };
   
  
  describe('#Get /api/customer/:customerId', () => {
      it('should get customer details', (done) => {
          request(app)
          .get(`/api/customer/${user._id}`)
          .expect(httpStatus.OK)
          .then((res) => {
            expect(res.body.firstName).to.equal(user.firstName);
            done();
          })
          .catch(done);
      })
  });

  describe('# POST /api/customer', () => {
    it('should create a new customer', (done) => {
      request(app)
        .post('/api/customer')
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.firstName).to.equal(user.firstName);
          expect(res.body.lastName).to.equal(user.lastName);
          expect(res.body.email).to.equal(user.email);
          user = res.body;
          done();
        })
        .catch(done);
    });
  });

})