var Stream = require('stream'),
    inherits = require('util').inherits,
    Buffer = require('buffer').Buffer;

/**
 * Implements a readable stream interface to a string or a buffer.
 * @param {String} data A initial string to fill the buffer.
 */

function Readable(data) {
  Readable.super_.call(this);
  
  /*! The implementation works with a buffer internally. */

  if (!Buffer.isBuffer(data)) {
    
    /*! In case that we don't get a buffer as argument we convert it into a
     * unicode string. */

    this._data = new Buffer(data);
  } else {
    this._data = data || '';
  }
};
inherits(Readable, Stream);

/**
 * Reads the given n bytes from the stream.
 * @param {Number} n Number of bytes to read.
 */

Readable.prototype.read = function (n) {
  var chunk;

  /*! We must take care: The buffer doesn't like .slice(0, -1) */

  if (n === -1 || n == null) {
    chunk = this._data;
  } else {
    chunk = this._data.slice(0, n);
  }
  if (n >= this._data.length || n === -1) this.emit('end');
  return chunk;
};

/**
 * Not quite sure if it is necessary to implement the pipe method.  But the
 * piping with the core method doesn't work. 
 * @param {Buffer} dest The destination stream to write to.
 */

Readable.prototype.pipe = function (dest) {
  dest.write(this.read());
  dest.end();
};
exports.Readable = Readable;
