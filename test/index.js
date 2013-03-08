var Readable = require('..').Readable,
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
