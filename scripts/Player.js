function Player(tileset, controller) {
	this.pos = 6;

	this.score = 100000;
	this.lastScoreDown = 0;
	this.scoreNode = document.querySelector('div.score');
	this.scoreNode.innerText = ~~this.score;

	//used for render the jump & hit action.
	this.posSave = 0;
	this.offHeight = 0;

	this.action = Player.ACTION.STAY;
	this.tileset = tileset;
	this.controller = controller;

	//build animation depending of the Player.ACTION;
	this.animationFrames = this.buildAnimationFrames();

	//updated when the action of the player change. (use setAction) 


	this.lastActionChange = 0;
	
	this.animationState = 0;
	this.animationCurrentVisualOffset = 0;
	this.animationMaxState = 8;
}

Player.prototype = {
	/*
	 *Logic update.
	*/
	update: function(level, time) {
		switch(this.action) {
			case Player.ACTION.STAY:
					if(this.controller.stat.press){
						this.controller.stat.press = false;
						this.controller.stat.release = false;
						this.setAction(Player.ACTION.CHARGE, time);
					}

				break;
			case Player.ACTION.WALK:
					var progress = Math.min( (time -this.lastActionChange) /(Game.TIME_STEP *2), 1);

					this.pos = (~~this.pos) +progress;

					if(progress === 1){
						this.controller.stat.release = false;

						this.setAction(Player.ACTION.STAY, time);
					}

				break;
			case Player.ACTION.JUMP:
					var progress = Math.min( (time -this.lastActionChange) /(Game.TIME_STEP *3), 1);

					this.pos = (this.posSave) + progress*2;
					this.offHeight = ~~(Math.sin(progress* Math.PI) * 16);

					if(progress === 1){
						this.controller.stat.release = false;

						this.setAction(Player.ACTION.STAY, time);
					}

				break;
			case Player.ACTION.CHARGE:
					if(this.controller.stat.release){
						this.controller.stat.release = false;

						if((Date.now()-this.controller.stat.pressTime) >= Game.TIME_STEP *7){
							this.posSave = this.pos;
							this.setAction(Player.ACTION.JUMP, time);

						}else
							this.setAction(Player.ACTION.WALK, time);
					}

				break;
			case Player.ACTION.HIT:
					var progress = Math.min( (time -this.lastActionChange) /(Game.TIME_STEP *2), 1);
					this.pos = (this.posSave) - progress*2;

					if(progress === 1){
						this.controller.stat.release = false;
						this.controller.stat.press = false;

						this.setAction(Player.ACTION.STAY, time);
					}
				break;
		}


		//Add a safe zone between two Obstacle. 
		var partialMove = this.pos - ~~(this.pos);
		var mortal = false;

		if(partialMove < .4 || partialMove > .6)
			mortal = level.map[ Math.round(this.pos) ].isMortal(this, time);

		if(mortal && this.action !== Player.ACTION.HIT){
			this.posSave = Math.round(this.pos);
			this.offHeight = 0;
			this.setAction(Player.ACTION.HIT, time);
			//this.pos = Math.round(this.pos);
		}

		if(this.lastScoreDown < time-250){
			this.lastScoreDown = time;
			this.score -= 1;
		}

	},

	/*
	 * Update the current stat of the player.
	*/
	setAction: function(action, time){
		this.lastActionChange = time;
		this.action = action;

		if(this.action === Player.ACTION.HIT)
			this.score -= 5;
	},


	/*
	 * Get the right texture from the tileset.
	*/
	getPlayerSprite: function(time) {
		var step = ~~((time -this.lastActionChange) /Game.TIME_STEP) %this.animationFrames[this.action].length;
		return this.animationFrames[this.action][step];
	},


	/*
	 *Visual render.
	*/
	render: function(ctx, time) {
		var currentPos = Player.transpose(this.pos);
		var sprite = this.getPlayerSprite(time);

		ctx.drawImage(this.tileset.texture, sprite.x, sprite.y, sprite.w, sprite.h, currentPos.x -sprite.offX, currentPos.y -sprite.offY -this.offHeight, sprite.w, sprite.h);

		this.scoreNode.innerText = ~~this.score;
	},

	/*
	 * Define the animation Frame off the player.
	*/
	buildAnimationFrames: function() {
		var self = this;
		var builder = [
			['run2', 'run2', 'run2', 'run2', 'run5', 'run5', 'run5', 'run5'],
			['run0', 'run1', 'run2', 'run0', 'run3', 'run4', 'run5'],
			['jump1'],
			['charge', 'charge', 'charge1', 'charge1', 'charge2', 'charge2', 'charge3', 'charge3', 'charge2', 'charge3', 'charge2', 'charge3', 'charge2', 'charge3', 'charge2', 'charge1'],
			['jump1']
		];

		var result = [];

		builder.forEach(function (animation) {
			var subResult = [];

			animation.forEach(function (id) {
				subResult.push( self.tileset.get(id) );
			});

			result.push(subResult);
		});

		return result;
	}
};

//ENUM
Player.ACTION = {
	STAY: 0,
	WALK: 1,
	JUMP: 2,
	CHARGE: 3,
	HIT: 4
};

/*
 *Change the 2d position into 2d isometrique. No need `y` param.
*/
Player.transpose = (function buildTranspose() {
	var transposeX = 32,
		transposeY = 16;


	return function transpose(x) {
		return {
			x: x *transposeX,
			y: -x *transposeY
		};
	};
})();

