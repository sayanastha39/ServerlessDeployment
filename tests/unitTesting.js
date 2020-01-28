const request = require('supertest');
const expect = require('chai').expect;
const should = require('should');
const get = require('../handlers/index');

describe("Get customr details", function() {
    it("should return a customer details that matches the provided id", async function() {
      const stubValue = {
        id: "1",
        firstname: "Santa",
        lastname: "Arson",
        email: "arson@hotmail.com",
        address: "234 Oak DR, Fairfax, VA, 48824"
      };

      const event ={
          pathParameters: { "id":"1" }
      }
      
      //const index = new Index();
      const user = await get.handler(event);

     // expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.firstname).to.equal(stubValue.name);
      expect(user.lastname).to.equal(stubValue.name);
      expect(user.email).to.equal(stubValue.email);
      expect(user.address).to.equal(stubValue.address);
    });
  });
