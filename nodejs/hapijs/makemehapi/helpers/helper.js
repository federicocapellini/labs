module
  .exports = function( context ) {
    
    var query = context.data.root.query;
    console.log( context );

    return query.name + query.suffix;

  };
