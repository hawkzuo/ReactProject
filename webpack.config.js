// scripts in package.json allow global alias for bin commands
// this file is the settings for webpack
// webpack is used to translate ES6 to lower version of JS
// ERROR: Module build failed: TypeError: fileSystem.statSync is not a function
// Solution: downgrade babel-loader package to version 6.2.10



module.exports = {
    // specify the entry to be converted
    entry: "./app/js/main.js",
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
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }

            }
        ]
    }
};
