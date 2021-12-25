const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (env) => {
    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: './src/index.tsx',
        devServer: {
            hot: true,
            port: 3000,
        },
        target: 'web',
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new Dotenv({ path: `${env.env_file}` }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico',
            }),
            new TsconfigPathsPlugin(),
            isDevelopment && new webpack.HotModuleReplacementPlugin(),
            isDevelopment && new ReactRefreshWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: './public',
                        to: './',
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ['**/*.html', '**/assets/fonts/**'],
                        },
                    },
                ],
            }),
        ],
        resolve: {
            modules: [__dirname, 'src', 'node_modules'],
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$|tsx/,
                    exclude: /node_modules/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(
                            Boolean,
                        ),
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.png|svg|jpg|gif$/,
                    use: ['file-loader'],
                },
            ],
        },
    };
};
