const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve:{
        fallback:{
            'fs':false,
        },
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html"],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module:{
        rules: [
            {
                test:/\.csv$/,
                loader:'csv-loader',
                options:{
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines:true
                }
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