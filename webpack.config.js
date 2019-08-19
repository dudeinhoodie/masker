const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/code.ts'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
