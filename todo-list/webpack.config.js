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
    module: {
        loaders: [{
            include: DEV,
            loader: "babel",
        }]
    }
    };
       
module.exports = config;    