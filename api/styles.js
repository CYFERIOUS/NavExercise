var sass = require('node-sass');
sass.render({
  file: 'public/stylesheets/proof.scss',
  data: 'body{background:blue; a{color:black;}}',
  importer: function(url, prev, done) {
    // url is the path in import as is, which libsass encountered. 
    // prev is the previously resolved path. 
    // done is an optional callback, either consume it or return value synchronously. 
    // this.options contains this options hash, this.callback contains the node-style callback 
    someAsyncFunction(url, prev, function(result){
      done({
        file: result.path, // only one of them is required, see section Sepcial Behaviours. 
        contents: result.data
      });
    });
  }
});