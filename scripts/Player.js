function Player(tileset, controller) {
	this.pos = 0;
	this.tileset = tileset;
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
	render: function(ctx) {
		var pos = this.transpose(this.pos);
		var player = this.getPlayer();

		ctx.drawImage(this.tileset.texture, player.x, player.y, player.w, player.h, pos.x-player.offX, pos.y-player.offY, player.w, player.h);
	},

	/*
	 * Get the right texture from the tileset.
	*/
	getPlayer: function() {
		return this.tileset.get("run0");
	},

	/*
	 *Change the 2d position into 2d isometrique. No need `y` param.
	*/
	transposeX: 32,
	transposeY: 16,
	transpose: function(x) {
		return {
			x: x*this.transposeX + 2*this.transposeX,
			y: -x*this.transposeY + 2*this.transposeY
		};
	}
};

//ENUM
Player.ACTION = {
	STAY: 0,
	WALK: 1,
	JUMP: 2,
	LOAD: 3
};

