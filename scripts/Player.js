function Player(tilesets, controller) {
	this.pos = 0;
	this.tilesets = tilesets;
	this.controller = controller;
}

Player.prototype = {
	/*
	 *Logic update.
	*/
	update: function(world, time) {
		
	},

	/*
	 *Visual render.
	*/
	render: function(ctx, time) {


	}
};

//ENUM
Player.ACTION = {
	STAY: 0,
	WALK: 1,
	JUMP: 2,
	LOAD: 3
};

