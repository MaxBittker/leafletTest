module.exports = {
    entry: "./paris.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [{
            test: /\.js?$/,
            loaders: ['jshint'],
            // define an include so we check just the files we need
            include: "./paris.js"
        }],
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    }
};
