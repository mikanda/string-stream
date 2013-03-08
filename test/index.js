var Readable = require('..').Readable,
    Writable = require('..').Writable,
    Pipe = require('pipette').Pipe;
require('should');
describe('Readable stream', function () {
  it('should work', function (done) {
    var stream = new Readable('Test buffer'),
        pipe = new Pipe();
    stream.on('end', function (data) {
      done();
    });
    pipe.reader.on('error', done);
    pipe.reader.on('data', function (data) {
      try {
        data.toString().should.equal('Test buffer');
      } catch (x) {
        done(x);
      }
    });
    stream.pipe(pipe.writer);
  });
});
describe('Writable stream', function () {
  it('should write the given data', function (done) {
    var stream = new Writable();
    stream.on('end', function () {
      stream.toString().should.equal('Test content');
      done();
    });
    stream.end('Test content');
  });
});
