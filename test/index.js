var Stream = require('..'),
    Pipe = require('pipette').Pipe;
require('should');
describe('Stream', function () {
  it('should work', function (done) {
    var readStream = new Stream('Test buffer'),
        writeStream = new Stream();
    writeStream.on('end', function () {
      writeStream.toString().should.equal('Test Test buffer');
      done();
    });
    writeStream.write('Test ');
    readStream.pipe(writeStream);
  });
});
