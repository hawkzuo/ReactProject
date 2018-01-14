// scripts in package.json allow global alias for bin commands

// this file is the settings for webpack
// webpack is used to translate ES6 to lower version of JS
// option -w is 'watching', auto recompile files on file changes

// ERROR: Module build failed: TypeError: fileSystem.statSync is not a function
// Solution: downgrade babel-loader package to version 6.2.10


// Full Document: https://webpack.js.org/configuration/
module.exports = {
    // specify the entry to be converted
    entry: "./app/js/app.js",
    // specify the output setting of the converted file
    output: {
        path: '/Users/jianyuzuo/Workspaces/React/first_app' + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // all .js .jsx files
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // ERROR: ERROR in Loader /Users/jianyuzuo/Workspaces/React/first_app/node_modules/react-hot-loader/lib/index.js didn't return a function @ multi main
                // loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
                // LOG: [WDS] Hot Module Replacement enabled.
                loader: ['babel'],
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
