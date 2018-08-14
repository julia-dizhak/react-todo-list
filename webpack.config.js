const webpack = require("webpack"),
    path = require("path"),

    DEV = path.resolve(__dirname, "dev"),
    OUTPUT = path.resolve(__dirname, "output");
 
const config = {
    entry: DEV + "/index.jsx",
    output: {
        path: OUTPUT,
        filename: "myCode.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
        })
    ],
    module: {
        loaders: [{
            include: DEV,
            loader: "babel",
        }]
    }
    };
       
module.exports = config;    