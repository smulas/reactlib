var webpack = require('webpack');

module.exports = [
    {
        entry: "./app.tsx",
        devServer: {
            port: 7777
        },
        output: {
            filename: 'dist/app.js'
        },
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        devtool: 'source-map', // if we want a source map 
        module: {
            loaders: [
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.tsx?$/, loader: 'ts-loader' }
            ]
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
    }
];