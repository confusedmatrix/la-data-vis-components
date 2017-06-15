const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'la-components.js',
        library: 'LAComponents',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React",
        },
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_",
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
}