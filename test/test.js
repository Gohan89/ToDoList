const request = require('supertest');
const app = require('./app'); // Adjust the path based on your actual file structure
const expect = require('chai').expect;

describe('ToDo List App', function() {
    it('should add a new item to the ToDo list', function(done) {
        request(app)
            .post('/todo/add/')
            .send({ newtodo: 'Test task' })
            .expect(302) // Expecting a redirect after adding
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should edit an existing item in the ToDo list', function(done) {
        request(app)
            .put('/todo/edit/0') // Assuming editing the first item in the list
            .send({ editTodo: 'Edited test task' })
            .expect(302) // Expecting a redirect after editing
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should delete an item from the ToDo list', function(done) {
        request(app)
            .get('/todo/delete/0') // Assuming deleting the first item in the list
            .expect(302) // Expecting a redirect after deleting
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});

