const chai  = require('chai');
const expect = chai.expect;
const get = require('../handlers/index');
 
describe('Get customr details', () => {
 
    it('Should return a customer details that matches the provided id', (done) => {

        const data = {
            id: "1",
            firstname: "Santa",
            lastname: "Arson",
            email: "arson@hotmail.com",
            address: "234 Oak DR, Fairfax, VA, 48824"
             };

        const event = {
            body: '',
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '',
            pathParameters: {"id":"1"},
            queryStringParameters: {},
            stageVariables: {},
            requestContext: {},
            resource: '' };
        
      get.handler(event,done)
        .then( response =>{
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(response.body)).to.deep.equal(data);
        })
        .catch(err => console.log(err))
        .finally(done)
        ;
        
     });
 
});
