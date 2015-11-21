
// GROS MAIN LOL

var config = {
	// Textures coord of our tileset
	"tilesets": {

		"map": {
			// Textures coord of our tiles
			"texturesCoord": [
				{"x": 0,	"y": 62}, 	// 0 : Perso
				{"x": 0,	"y": 0}, 	// 1 : id Floor
				{"x": 62,	"y": 0},	// 2 : id Pike
				{"x": 124,	"y": 0},	// 3 : id Smooth
				{"x": 0,	"y": 0}		// 4 : Wall	
			],
			// Path of our tileSet
			"tilesetPath": "assets/img/tiles.png"
		},

		"character": {
			// Textures coord of our character
			"texturesCoord": [
				{"x": 0,	"y": 62}, 	// 0 : Perso
				{"x": 0,	"y": 0}, 	// 1 : id Floor
				{"x": 62,	"y": 0},	// 2 : id Pike
				{"x": 124,	"y": 0},	// 3 : id Smooth
				{"x": 0,	"y": 0}		// 4 : Wall	
			],
			// Path of our tileSet
			"tilesetPath": "assets/img/tiles.png"
		}
	}
};

var game = new Game(config);

game.init();

window.onload = function(){

	game.loadLevel();
};

console.log(game)