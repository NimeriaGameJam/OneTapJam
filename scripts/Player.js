function Player(tileset, controller) {
	this.pos = 0;
	this.action = Player.ACTION.STAY;
	this.tileset = tileset;
	this.controller = controller;
}

Player.prototype = {
	/*
	 *Logic update.
	*/
	update: function(world, time) {

		if(this.controller.stat.press && this.controller.stat.release){

			this.action = Player.ACTION.LOAD;

			var time = Date.now() - this.controller.stat.pressTime;

			if(time > 80 * 10){

				this.pos+=2;
				this.controller.stat.press = false;
				this.controller.stat.release = false;
			}
			else{

				this.pos++;
				this.controller.stat.press = false;
				this.controller.stat.release = false;
			}
		}
	},

	/*
	 * Get the right texture from the tileset.
	*/
	getPlayer: function(time) {
		console.log(time)
		return this.tileset.get("run0");
	},

	/*
	 *Visual render.
	*/
	render: function(ctx, time) {
		var pos = this.transpose(this.pos);
		var player = this.getPlayer(time);

		ctx.drawImage(this.tileset.texture, player.x, player.y, player.w, player.h, pos.x-player.offX, pos.y-player.offY, player.w, player.h);
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

