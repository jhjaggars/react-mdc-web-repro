module.exports = {
    entry: "./index.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}

