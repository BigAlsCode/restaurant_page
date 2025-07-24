const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const { query } = require("express");

module.exports={
    entry: {
        app: "./src/index.js",
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ], 
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve:{
        alias:{
            "~":__dirname
        },  
    },
    
    module:{
        rules: [
            {
                test:/\.xlsx$/,
                use:'webpack-xlsx-loader'
            },
            {
                test:/\.(txt|csv|mmdb)$/,
                use:[
                    {
                        loader: 'csv-loader',
                        options:{
                            name:"[path][name].[ext]",
                            emitFile:true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader:"html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    
};