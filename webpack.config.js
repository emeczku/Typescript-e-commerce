const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

//change path to your env variables
require("dotenv").config({ path: "src/.env" });

module.exports = {
    plugins: [
        //creating html pages on production
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            inject: true,
            chunks: ["index"],
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/products.html",
            inject: true,
            chunks: ["products"],
            filename: "products.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/cart.html",
            inject: true,
            chunks: ["cart"],
            filename: "cart.html",
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    entry: {
        index: ["./src/views/Index.ts", "./src/scripts/navigation.ts"],
        products: [
            "./src/views/Products.ts",
            "./src/scripts/navigation.ts",
            "./src/scripts/search.ts",
        ],
        cart: ["./src/views/Cart.ts", "./src/scripts/navigation.ts"],
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", "json"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
