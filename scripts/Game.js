/*
* Game object
*/
function Game(conf){
	this.conf = conf;

	this.ctx = document.querySelector('#my_canvas').getContext('2d');

	this.controller = new Controller(this);

	//list of tileset/tile/obstalce/level by name.
	this.tilesetsMap = {};
	this.tileMap = {};
	this.obstacleMap = {};
	this.levelMap = {};

	this.lastTime = 0;

	this.currentLevel = null;
}

Game.prototype = {
	/*
	 * 
	*/
	init: function(callback) {
	//CTX
		this.ctx.imageSmoothingEnabled = false;
		//this.ctx.scale(1, 1);
		this.controller.resizeEvent();

	//TILESET
		var tilesetTotal = 0, tilesetCount = 0, key;

		function getTilesetCallBack() {
			tilesetTotal++;

			return function TilesetCallBack() {
				if(++tilesetCount === tilesetTotal)
					callback();
			};
		}

		for(key in this.conf.tileset){
			var tileset = this.conf.tileset[key];
			this.tilesetsMap[key] = new Tileset(tileset.data, tileset.path, getTilesetCallBack());
		}


	//TILE
		var mapTileset = this.tilesetsMap['map'];

		for(key in this.conf.tile){
			var tileData = this.conf.tile[key];
			this.tileMap[key] = new Tile(mapTileset, tileData);
		}


	//OBSTACLE
		Obstacle.ConvertData(this.conf.obstacle, this.tileMap);
		this.obstacleMap = this.conf.obstacle;

	//LEVEL
		this.levelMap = this.conf.level;
	},


	start: function() {
		this.render(this.lastTime, this);
	},

	render: function(time, self) {
		requestAnimationFrame(function (time) {
			self.render(time, self);
			self.update();
		});

		if(self.currentLevel)
			self.currentLevel.render(self.ctx, time);
	},

	update: function(){

		this.currentLevel.update();
	},

	/*
	 * Used to load the `name` level.
	*/
	loadLevel: function(name) {
		var player = new Player(this.tilesetsMap['player'], this.controller);
		this.currentLevel = new Level(this.levelMap[name], player, this.obstacleMap);
	}
};

//timestep is ms.
Game.TIME_STEP = 80;