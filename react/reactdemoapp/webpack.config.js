module.exports = {
    //define entry point
    entry: {
      app: './src/index.js'
    },

    // Add resolve.extensions.
    // '' is needed to allow imports without an extension.
    // Note the .'s before extensions as it will fail to match without!!!
    resolve: {
      extensions: ['', '.js', '.jsx', '.es6.js']
    },

    //define output point
    output: {
      path: 'dist', //to create dist directory
      //path: __dirname,
      filename: 'app/js/main.js'
    },
    module: {
      loader: [
       {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query:{ presets: ['es2015','react'] }
       }]
    }
  };