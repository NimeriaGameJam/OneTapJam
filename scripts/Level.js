/*
* Level Object
*/
function Level(data, player, obstacleMap){
	this.player = player;
	this.map = this.buildMap(data, obstacleMap);
}

/*
* Function that initializes our level
*/
Level.prototype = {
	buildMap: function(data, obstacleMap) {
		var result = [];
		var index = 0;

		data.map.forEach(function (obstacle) {
			var data = obstacleMap[obstacle.id];
			result.push(new Obstacle(data.tileList, data.timeCycle, obstacle.delay, index++) );
		});

		return result;
	},

	update: function(time) {
		this.player.update();
	},

	render: function(ctx, time) {
		for(var i=0; i<this.map.length; i++)
			this.map[i].render(ctx, time);

		this.player.render(ctx);
	}
};