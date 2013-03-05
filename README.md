# StringStream for node.js

## Api

  - [Readable()](#readable)
  - [Readable.read()](#readablereadnnumber)
  - [Readable.pipe()](#readablepipedestbuffer)

### Readable()

  Exports methods which implement the stream interface and operate on a
  string.

### Readable.read(n:Number)

  Reads the given n bytes from the stream.

### Readable.pipe(dest:Buffer)

  Not quite sure if it is necessary to implement the pipe method.  But the
  piping with the core method doesn't work.
