module.exports={
    entry:["@babel/polyfill", "./src/app/index.js"],
    output:{
        path:__dirname+'/src/public',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude:/node_module/,
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            }
        ]
    } 
}