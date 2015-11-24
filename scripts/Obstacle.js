/*
 *
*/
function Obstacle(tileList, timeCycle, timeOffset, index) {
	//List of 5 tiles and offset time for each tile.
	this.tileList = tileList;

	//Value to define safe / mortal time.
	this.timeCycle = timeCycle;
	//offset from the preset paterne.
	this.timeOffset = timeOffset;

	this.index = index;

}

Obstacle.prototype = {
	/*
	 * Return true if the obstacle is currently mortal and can kill the player.
	*/
	isMortal: function(time) {
		return false;
	},

	/*
	 *
	*/
	render: function(ctx, time) {
		time += this.timeOffset * Game.TIME_STEP;
		var index = this.index;

		this.tileList.forEach(function (tile, y) {
			tile.tile.render(ctx, time + tile.delay * Game.TIME_STEP, index, y);
		});
	}
};


Obstacle.ConvertData = function(dataMap, tileMap){
	for(var key in dataMap){
		var data = dataMap[key];
		var result = {
			tileList: [],
			timeCycle: []
		};


		data.tileList.forEach(function (tile) {
			result.tileList.push({
				tile: tileMap[tile.id],
				offset: tile.offset
			});
		});

		data.timeCycle.forEach(function (time) {
			for(var i=0; i< time.count; i++)
				result.timeCycle.push(time.safe);
		});


		dataMap[key] = result;
	}
};