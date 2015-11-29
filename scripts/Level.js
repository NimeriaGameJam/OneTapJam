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

		for(var i=0; i<data.map.length; i+=2){
			var obstacle = obstacleMap[ data.map[i] ];

			result.push(new Obstacle(obstacle.tileList, obstacle.timeCycle, obstacle.type, data.map[i+1], index++) );
		}

		return result;
	},

	update: function(time) {
		this.player.update(this, time);

	},

	render: function(ctx, time) {
		this.player.controller.clearScreen();
		var pos = Player.transpose(this.player.pos -1);
		ctx.translate(-pos.x, -pos.y);

		var index = Math.min(~~this.player.pos+16, this.map.length-1),
			end = Math.max(~~this.player.pos-6, 0);

		for(; index>=end; index--)
			this.map[index].render(ctx, time);

		this.player.render(ctx, time);

		ctx.translate(pos.x, pos.y);
	}
};