var Hapi = require( 'hapi' );
var Path = require( 'path' );

var server = new Hapi.Server();

server
  .connection({
    host : 'localhost',
    port : Number( process.argv[ 2 ] || 3000 )
  });

server
  .route({
    method  : [ 'GET' ],
    path    : '/foo/bar/baz/{filename}',
    handler : {
      directory : {
        path : Path.join( __dirname, '/public' )
      }
    }
  });

server
  .start( function() {
    console.log( 'Server running at:', server.info.uri );
  });
