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
				"pike0": [0, 0, 62, 32],
				"pike1": [0, 0, 62, 32],
				"pike2": [0, 0, 62, 32],
				"pike3": [0, 0, 62, 32]
			},
			"path": "assets/img/tiles.png"
		},
		"player": {
			"data": {
				"run0": [0, 0, 62, 32],
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
			{"id": "pike1", "count": 1},
			{"id": "pike2", "count": 1},
			{"id": "pike3", "count": 1},
			{"id": "pike2", "count": 1},
			{"id": "pike1", "count": 1},
		]
	},

	"obstacle": {
		"ground": {
			"tileList": [
				{"id": "hole", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0},
				{"id": "ground", "delay": 0}
			],
			"timeCycle": [
				{"safe": true, "count": 1},
				{"safe": false, "count": 0}
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
				{"safe": true, "count": 1},
				{"safe": false, "count": 0}
			]
		}
	},

	"level": {
		"1": {
			"map": [
				{"id":"ground", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"hole", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"hole", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"ground", "delay":0},
				{"id":"hole", "delay":0},
				{"id":"ground", "delay":0}
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
	});

})(conf, debug);
