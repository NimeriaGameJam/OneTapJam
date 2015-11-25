//GLOBAL

//...



// ├ ─ └

/*(yep they was json formated)
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
				"ground0": [0, 0, 62, 32],
				"ground1": [0, 0, 62, 32],
				"ground2": [0, 0, 62, 32],
				"hole": [0, 32, 62, 32],
				"pike0": [62, 0, 62, 32],
				"pike1": [62, 32, 62, 32],
				"pike2": [62, 64, 62, 32],
				"pike3": [62, 96, 62, 32],
				"pike4": [62, 128, 62, 32],
				"pike5": [62, 160, 62, 32],
				"pike6": [62, 192, 62, 32]
			},
			"path": "assets/img/tiles.png"
		},
		"player": {
			"data": {
				"run0": [0, 0, 24, 38, 12, 35],
				"run1": [0, 0, 62, 32],
				"run2": [0, 0, 62, 32],
				"run3": [0, 0, 62, 32],
				"jump0": [0, 0, 62, 32],
				"charge": [0, 0, 62, 32],
				"pike3": [0, 0, 62, 32]
			},
			"path": "assets/img/player.png"
		}
	},

	"tile": {
		"ground": [
			{"id": "ground0", "count": 1}
		],
		"hole": [
			{"id": "hole", "count": 1}
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
		]
	},

	"obstacle": {
		"ground": {
			"tileList": [
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 1}
			]
		},
		"hole": {
			"tileList": [
				{"id": "hole", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "hole", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 1}
			]
		},
		"pike_slow": {
			"tileList": [
				{"id": "hole", "delay": 0},
				{"id": "pike", "delay": 0},
				{"id": "pike", "delay": 2},
				{"id": "pike", "delay": 4},
				{"id": "hole", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 1},
				{"safe": false, "count": 0}
			]
		}
	},

	"level": {
		"1": {
			"map": [
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "pike_slow", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "pike_slow", "delay": 10},
				{"id": "ground", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "hole", "delay": 0},
				{"id": "ground", "delay": 0}
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
