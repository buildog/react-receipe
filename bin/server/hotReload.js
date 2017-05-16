var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var devConfig = require("../../config/webpack.clientside.dev");
const port = process.env.PORT || 8080;
const ip = process.env.IP || "0.0.0.0";



new WebpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	hot: true,
	historyApiFallback: true,
	disableDotRule: true,
	disableHostCheck: true
}).listen(port, ip, function(err) {
	if(err) {
		console.log(err);
	}
	console.log("Webpack Server launched at "+ip+":"+port+" (hot reload enabled)");
});
