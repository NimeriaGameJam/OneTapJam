function Player(tileset, controller) {
	this.pos = 0;
	this.action = Player.ACTION.STAY;
	this.tileset = tileset;
	this.controller = controller;
	
	this.animationState = 0;
	this.animationCurrentVisualOffset = 0;
	this.animationFrames = [ // TODO : externalize ?
		this.tileset.get("run0"),
		this.tileset.get("run1"),
		this.tileset.get("run1"),
		this.tileset.get("run2"),
		this.tileset.get("run2"),
		this.tileset.get("run0"),
		this.tileset.get("run3"),
		this.tileset.get("run3"),
		this.tileset.get("run4"),
		this.tileset.get("run4"),
		this.tileset.get("run5"),
		this.tileset.get("run5")
	];
	this.animationMaxState = this.animationFrames.length;
}

Player.prototype = {
	/*
	 *Logic update.
	*/
	update: function(world, time) {

		if (this.animationState != 0) // animation in progress
		{
			if (this.animationState == this.animationMaxState) // last animation frame
			{
				this.pos = Math.round(this.pos + 1 / this.animationMaxState);
				this.animationState = 0;
			}
			else // any frame but the last one
			{
				this.animationState++;
				this.pos += 1 / this.animationMaxState;
				
				return;
			}
		}
	
		if(this.controller.stat.press && this.controller.stat.release && this.animationState == 0){

			this.action = Player.ACTION.LOAD;

			var pressTime = Date.now() - this.controller.stat.pressTime;

			if(pressTime > Game.TIME_STEP * 5)
			{
				this.pos+=2;
				
				this.controller.stat.press = false;
				this.controller.stat.release = false;
			}
			else
			{
				this.animationState = 1;
				this.pos += 1 / this.animationMaxState;
				
				this.controller.stat.press = false;
				this.controller.stat.release = false;
			}
		}
	},

	/*
	 * Get the right texture from the tileset.
	*/
	getPlayerSprite: function() {
		return this.animationFrames[this.animationState % this.animationMaxState];
	},

	/*
	 *Visual render.
	*/
	render: function(ctx, time) {
		var currentPos = this.transpose(this.pos);
		var sprite = this.getPlayerSprite();

		ctx.drawImage(this.tileset.texture, sprite.x, sprite.y, sprite.w, sprite.h, currentPos.x-sprite.offX, currentPos.y-sprite.offY, sprite.w, sprite.h);
	},

	/*
	 *Change the 2d position into 2d isometrique. No need `y` param.
	*/
	transposeX: 32,
	transposeY: 16,
	transpose: function(x) {
		return {
			x: (x * this.transposeX),
			y: (-x * this.transposeY)
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

