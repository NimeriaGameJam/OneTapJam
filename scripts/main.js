//GLOBAL

//...



// ├ ─ └
/*
 *├─conf
 *  ├─tileset
 *  │ ├─tile:
 *	│ │   Contain all positions data [x, y, w, h, {offX, offY}] in a map key:value (key is the name of the tile).
 *  │ │ 
 *  │ └─path:
 *  │     The path to load the corresponding image.
 *  │
 *  └─?TODO
*/


var conf = {
	"tileset": {
		"map": {
			"data": {
				"ground0": [0, 0, 62, 37, 32, 16],
				"ground1": [0, 0, 62, 32, 32, 16],
				"ground2": [0, 0, 62, 32, 32, 16],
				"wall": [0, 38, 62, 76, 32, 54],
				"water0": [0, 114, 62, 39, 32, 16],
				"water1": [0, 152, 62, 39, 32, 16],
				"water2": [0, 190, 62, 39, 32, 16],
				"water3": [0, 228, 62, 39, 32, 16],
				"pike0": [62, 0, 62, 38, 32, 16],
				"pike1": [62, 38, 62, 38, 32, 16],
				"pike2": [62, 76, 62, 38, 32, 16],
				"pike3": [62, 114, 62, 38, 32, 16],
				"pike4": [62, 152, 62, 38, 32, 16],
				"pike5": [62, 190, 62, 38, 32, 16],
				"pike6": [62, 228, 62, 38, 32, 16],
				"jumpH0": [124, 0, 62, 38, 32, 16],
				"jumpH1": [124, 38, 62, 38, 32, 16],
				"jumpH2": [124, 76, 62, 38, 32, 16],
				"jumpH3": [124, 114, 62, 38, 32, 16],
				"jumpH4": [124, 152, 62, 38, 32, 16],
				"jumpH5": [124, 190, 62, 38, 32, 16]
			},
			"path": "assets/img/tiles.png"
		},
		"player": {
			"data": {
				"run0": [0, 0, 24, 38, 12, 35],
				"run1": [24, 0, 24, 38, 12, 35],
				"run2": [48, 0, 24, 38, 12, 35],
				"run3": [72, 0, 24, 38, 12, 35],
				"run4": [96, 0, 24, 38, 12, 35],
				"run5": [120, 0, 24, 38, 12, 35],
				"jump0": [0, 38, 24, 38, 12, 35],
				"jump1": [24, 38, 24, 38, 12, 35],
				"charge": [0, 38, 24, 38, 12, 35],
				"charge1": [48, 38, 33, 38, 16, 30],
				"charge2": [80, 38, 24, 38, 12, 30],
				"charge3": [105, 38, 22, 38, 11, 30],
				"pike3": [0, 0, 62, 32]
			},
			"path": "assets/img/player.png"
		}
	},

	"tile": {
		"ground": [
			{"id": "ground0", "count": 1}
		],
		"wall": [
			{"id": "wall", "count": 1}
		],
		"water": [
			{"id": "water0", "count": 2},
			{"id": "water1", "count": 2},
			{"id": "water2", "count": 2},
			{"id": "water3", "count": 2}
		],
		"pike": [
			{"id": "pike0", "count": 10},
			{"id": "pike1", "count": 3},
			{"id": "pike2", "count": 1},
			{"id": "pike3", "count": 1},
			{"id": "pike4", "count": 1},
			{"id": "pike5", "count": 1},
			{"id": "pike6", "count": 1},
			{"id": "pike1", "count": 1}
		],
		"pike2": [
			{"id": "pike0", "count": 10},
			{"id": "pike1", "count": 3},
			{"id": "pike2", "count": 1},
			{"id": "pike3", "count": 1},
			{"id": "pike4", "count": 1},
			{"id": "pike5", "count": 1},
			{"id": "pike3", "count": 1},
			{"id": "pike4", "count": 1},
			{"id": "pike5", "count": 1},
			{"id": "pike3", "count": 1},
			{"id": "pike4", "count": 1},
			{"id": "pike5", "count": 1},
			{"id": "pike6", "count": 1},
			{"id": "pike1", "count": 1}
		],
		"jumpHelp": [
			{"id": "jumpH0", "count": 4},
			{"id": "jumpH1", "count": 1},
			{"id": "jumpH2", "count": 1},
			{"id": "jumpH3", "count": 1},
			{"id": "jumpH4", "count": 1},
			{"id": "jumpH5", "count": 1},
			{"id": "jumpH4", "count": 1},
			{"id": "jumpH5", "count": 1},
			{"id": "jumpH4", "count": 1},
			{"id": "jumpH5", "count": 1},
			{"id": "jumpH4", "count": 1},
			{"id": "jumpH5", "count": 1}
		], 
		"moveHelp": [
			{"id": "jumpH0", "count": 4},
			{"id": "jumpH2", "count": 1},
			{"id": "jumpH4", "count": 1},
			{"id": "jumpH2", "count": 1},
		]
	},

	"obstacle": {
		"ground": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
			],
			"type": "safe"
		},
		"smallGround": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
			],
			"type": "safe"
		},
		"water": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
			],
			"type": "hole"
		},
		"jumpHelp": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "jumpHelp", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
			],
			"type": "hole"
		},
		"moveHelp": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "moveHelp", "delay": 0},
				{"id": "pike2", "delay": 3},
				{"id": "pike2", "delay": 6},
				{"id": "pike2", "delay": 9},
				{"id": "pike2", "delay": 12},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 8},
				{"safe": false, "count": 9},
				{"safe": true, "count": 8}
			],
			"type": "cyclic"
		},

		"pike": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "water", "delay": 0},
				{"id": "pike", "delay": 0},
				{"id": "pike", "delay": 2},
				{"id": "pike", "delay": 4},
				{"id": "water", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 12},
				{"safe": false, "count": 2},
				{"safe": true, "count": 5}
			],
			"type": "cyclic"
		},
		"pike2": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "pike2", "delay": 0},
				{"id": "pike2", "delay": 3},
				{"id": "pike2", "delay": 6},
				{"id": "pike2", "delay": 9},
				{"id": "pike2", "delay": 12},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 8},
				{"safe": false, "count": 9},
				{"safe": true, "count": 8}
			],
			"type": "cyclic"
		},

		"wall": {
			"tileList": [
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0},
				{"id": "wall", "delay": 0}
			],
			"timeCycle": [
				{"safe": false, "count": 1}
			],
			"type": "cyclic"
		}
	},

	"level": {
		"1": {
			"map": [ 
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"moveHelp", 0,
				"ground", 0,
				"ground", 0,
				"pike2", 32,
				"ground", 0,
				"smallGround", 0,
				"jumpHelp", 0,
				"smallGround", 10,
				"ground", 0,
				"water", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"water", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"ground", 0,
				"pike", 32,
				"pike", 24,
				"pike", 16,
				"pike", 8,
				"pike", 0,
				"pike2", 32,
				"pike2", 24,
				"pike2", 16,
				"pike2", 8,
				"pike2", 0,
				"wall", 0
			]
		}
	},

	"audio": {
		"theme": "assets/music/theme01.wav"
	}
};



//MAIN
var debug = {};
(function main(conf, debug){
	var game = new Game(conf);

	game.init(function () {
		game.loadLevel('1');
		game.start();

		debug.game = game;
	});
})(conf, debug);
