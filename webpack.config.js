let path = require('path');


module.exports = {
//wskazuję ściężkę do pliku, którego webpack ma wziąć pod uwagę
entry:"./app/assets/scripts/app.js",
//gdzie powiązany plik js ma się znajdować, w patch powinna być ścieżka absolutna
output: {
path: path.resolve(__dirname, "./app/temp/scripts"),
filename: "app.js"
},
module: {
loaders: [
{
	loader: 'babel-loader',
	query: {
		presets: ['es2015']
	},
	test: /\.js$/,
	exclude: /node_modules/
}
]
}
}











