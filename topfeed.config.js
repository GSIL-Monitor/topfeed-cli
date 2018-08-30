// @ts-check
const path = require("path");
const root = process.cwd();
module.exports = {
	client_port: 4002,
	server_port: 3333,
	outputPath: path.resolve(__dirname, "dist"),
	publicPath: "http://127.0.0.1:4002/static/", // webpack-dev-server的publicPath
	configureWebpack: ({ buildTarget }) => {
		return {
			context: path.resolve(__dirname),
			entry: "./src",
			output: {
				path: path.resolve(__dirname, `dist/${buildTarget}`),
				publicPath: "/static/"
			}
		};
	},
	font: {
		input: path.resolve(root, "client/assets/svg"),
		output: path.resolve(root, "client/assets/fonts"),
		fontName: "i18nfont"
	},
	i18n: {
		project: "1",
		output: path.resolve(root, "server/locales/langs"),
		draft: false,
		whitelist: ["ko", "ja"]
	}
};
