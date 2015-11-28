/*
 *
*/
function Obstacle(tileList, timeCycle, type, timeOffset, index) {
	//List of 5 tiles and offset time for each tile.
	this.tileList = tileList;

	//Value to define safe / mortal time.
	this.timeCycle = timeCycle;
	//offset from the preset paterne.
	this.timeOffset = timeOffset;

	this.type = type;

	this.index = index;
}

Obstacle.prototype = {
	/*
	 * Return true if the obstacle is currently mortal and can kill the player.
	*/
	isMortal: function(player, time) {
		return this[this.type](player, time);
	},

//type functions
	safe: function() {
		return false;
	},

	hole: function(player, time) {
		return player.action !== Player.ACTION.JUMP && player.action !== Player.ACTION.HIT;
	},

	cyclic: function(player, time) {
		return !this.timeCycle[ ( (~~(time /Game.TIME_STEP)) +this.timeOffset) %this.timeCycle.length ];
	},

//type functions END

	/*
	 * render.
	*/
	render: function(ctx, time) {
		var innerTime = time +this.timeOffset *Game.TIME_STEP;
		var index = this.index;

		this.tileList.forEach(function (tile, y) {
			tile.tile.render(ctx, innerTime +tile.delay *Game.TIME_STEP, index, y -3);
		});

		if(this.isMortal(debug.game && debug.game.currentLevel.player || {}, time)){
			var pos = Player.transpose(this.index);
			ctx.strokeRect(pos.x -10, pos.y -10, 20, 20);
		}
	}
};


Obstacle.ConvertData = function(dataMap, tileMap){
	for(var key in dataMap){
		var data = dataMap[key];
		var result = {
			tileList: [],
			timeCycle: [],
			type: data.type
		};

		data.tileList.forEach(function (tile) {
			result.tileList.push({
				tile: tileMap[tile.id],
				delay: tile.delay
			});
		});

		data.timeCycle.forEach(function (time) {
			for(var i=0; i< time.count; i++)
				result.timeCycle.push(time.safe);
		});

		dataMap[key] = result;
	}
};