var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var devConfig = require("../../config/webpack.clientside.dev");
const port = process.env.PORT || 8080;



new WebpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(port, "0.0.0.0", function(err) {
	if(err) {
		console.log(err);
	}
	console.log("Webpack Server launched at 0.0.0.0:"+port+" (hot reload enabled)");
});
