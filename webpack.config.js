const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
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
    ],
    entry: {
        index: "./src/components/index.ts",
        products: "./src/components/products.ts",
        cart: "./src/components/cart.ts",
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
