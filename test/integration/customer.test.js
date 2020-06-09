const { expect } = require('chai');
const httpStatus = require('http-status');
const request = require('supertest-as-promised');
const app = require('../../src/server');


describe('Customer Api', () => {
  let user = {
    firstName: 'Valerie',
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
  })

})