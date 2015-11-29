/*
 * The Controller link the action of the player and the game himself.
*/
function Controller(game) {
	this.target = window;
	this.game = game;

	//Define listeners functions.
	this.pressEvent = this.definePressEvent();
	this.relaseEvent = this.defineReleaseEvent();
	this.resizeEvent = this.defineResizeEvent();

	//Define the stats used by the game to know the interactions of the user.
	this.stat = {
		press: false,
		release: false,
		pressTime: 0
	};

	//Used to clear the canvas.
	this.screen = {
		top: 0,
		left: 0,
		height: 0,
		width: 0
	};

	//Add listeners.
	this.target.addEventListener('mousedown', this.pressEvent);
	this.target.addEventListener('touchstart', this.pressEvent);
	this.target.addEventListener('mouseup', this.relaseEvent);
	this.target.addEventListener('touchend', this.relaseEvent);
	this.target.addEventListener('resize', this.resizeEvent);

	this.bindAudio();
	this.bindReset();
}

Controller.prototype = {
	/*
	 * Remove all listeners.
	 * (Yes, it will never be used, maybe)
	*/
	destroy: function() {
		this.target.removeEventListener('mousedown', this.pressEvent);
		this.target.addEventListener('touchstart', this.pressEvent);
		this.target.removeEventListener('mouseup', this.relaseEvent);
		this.target.addEventListener('touchend', this.relaseEvent);
		this.target.removeEventListener('resize', this.resizeEvent);
	},

	bindAudio: function() {
		var audio = document.querySelector('audio');
		var self = this;
		var div = document.querySelector('div.audio');

		div.addEventListener('mousedown', press);
		div.addEventListener('touchstart', press);

		audio.volume = .25;

		function press(event){
			if(audio.volume === .25)
				audio.volume = 0.0;
			else
				audio.volume = 0.25;

			event.stopImmediatePropagation();
		}
	},

	bindReset: function() {
		var game = this.game;
		var div = document.querySelector('div.reset');

		div.addEventListener('mousedown', reset);
		div.addEventListener('touchstart', reset);

		function reset() {
			game.loadLevel('1');
			event.stopImmediatePropagation();
		}
	},

	/*
	 * Define what have to be down (you got it ?).
	*/
	definePressEvent: function() {
		//access
		var self = this;

		//the function itself 
		return function PressEvent(event) {
			self.stat.press = true;
			self.stat.pressTime = Date.now();
		};
	},

	/*
	 * Define what have to be down when the will be relase
	*/
	defineReleaseEvent: function() {
		//access
		var self = this;

		//the function itself 
		return function relaseEvent(event) {
			self.stat.release = true;
		};
	},


	/*
	 * Defines the whole metrics to clear and resize the canvas.
	*/
	defineResizeEvent: function() {
		//access
		var self = this;
		var canvas = document.querySelector('#my_canvas');
		var ctx = this.game.ctx;

		var minW = 478,
			minH = 240;

		//the function itself 
		return function resizeEvent() {
			//Window scale data.
			var scaleW = window.innerWidth /minW,
				scaleH = window.innerHeight /minH;
			var scaleMin = Math.min(scaleW, scaleH);

			//Calculate height, width & offset.
			var width = (scaleW /scaleMin) *minW,
				height = (scaleH /scaleMin) *minH;

			self.screen.width = canvas.width = width;
			self.screen.height = canvas.height = height;

			var leftOffset = ~~( (canvas.width -minW) /2) +64;
			var topOffset = ~~( (canvas.height -minH) /2) +176 +32;

			self.screen.left = -leftOffset;
			self.screen.top = -topOffset;

			ctx.translate(leftOffset, topOffset);
			self.clearScreen();

			//Update the css scale and position.
			canvas.style.transform = 'scale('+ scaleMin +', '+ scaleMin +')';
			canvas.style.top = 'calc(50vh - '+ (canvas.height /2) +'px)';
			canvas.style.left = 'calc(50vw - '+ (canvas.width /2) +'px)';

			//set debug stat
			ctx.strokeStyle = 'red';
			ctx.lineWidth = .5;
		};
	},

	/*
	 * Clear the canvas.
	*/
	clearScreen: function() {
		this.game.ctx.clearRect(this.screen.left, this.screen.top, this.screen.width, this.screen.height);
	}
};