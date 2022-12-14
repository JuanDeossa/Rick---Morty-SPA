const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"./main.js",
        clean:true
    },
    // devtool:"source-map",
    resolve:{
        extensions:[".js"],
        alias:{
            "@pages":path.resolve(__dirname,"src/pages/"),
            "@routes":path.resolve(__dirname,"src/routes/"),
            "@styles":path.resolve(__dirname,"src/styles/"),
            "@templates":path.resolve(__dirname,"src/templates/"),
            "@utils":path.resolve(__dirname,"src/utils/"),
        },
    },
    module:{
        rules:[
            //Babel
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            //Css
            {
                test:/\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:"body",
            template:"./public/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"styles/[name].css",
        })
    ],
}
