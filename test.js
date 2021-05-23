var request = require(‘supertest’);
var app = require(‘../app.js’);
describe(‘GET /’, function() {
 it(‘respond with hello world’, function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get(‘/’).expect(‘Hello This is Node.js website deployed through Jenkins created by Abhishek Singh’, done);
 });
});
