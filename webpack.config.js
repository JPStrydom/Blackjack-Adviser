module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.css', '.js', '.json', '.jsx']
    },
    devServer: {
        contentBase: './'
    }
};
