module.exports = {
    module: {
        rules: [
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    getStyleLoaders({
                    importLoaders: 1,
                    modules: true
                }),
                ]
            },
        ]
    }
}