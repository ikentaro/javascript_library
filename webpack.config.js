const path=require('path');

module.exports={
    entry: {
	//	util: './src/util.js',	
	svg: './src/svg.js',
	math: './src/math.js',
	three: './src/three.js',
	audio: './src/audio.js',
	anime: './src/anime.js',
    },

    output: {
	path: path.join(__dirname, './dist'),
	filename: '[name].js'
    },

    module: {
	rules: [{
	    test: /\.js$/,
	    exclude: /node_modules/,
	    use: [{
		loader: 'babel-loader'
	    }]
	}]
    }
}
