const path = require('path')

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/, 
                exclude: "/node_modules",
                use: 'babel-loader'
            },
            
        ]
    },
    mode: 'development',
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}