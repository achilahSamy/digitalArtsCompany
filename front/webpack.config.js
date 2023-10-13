const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            devServer: {
              proxy: {
                '/api/v1': 'http://localhost:5000',
              },
              historyApiFallback: true,
              open: true
            },
            module: {
                rules: [
                  {
                    test: /\.css$/,
                    use: [
                      'style-loader',
                      'css-loader'
                    ]
                  },
                 {
                    test: /\.(jpe?g|png|gif|svg|ico)$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ]
        }
};
