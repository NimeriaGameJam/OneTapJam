/*
 * The Controller link the action of the player and the game himself.
*/
function Controller(target) {
	this.target = target;

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

	//Add listeners.
	this.target.addEventListener('mousedown', this.pressEvent);
	this.target.addEventListener('mouseup', this.relaseEvent);
	this.target.addEventListener('resize', this.resizeEvent);
}

Controller.prototype = {
	/*
	 * Remove all listeners.
	 * (Yes, it will never be used, maybe)
	*/
	destroy: function() {
		this.target.removeEventListener('mousedown', this.pressEvent);
		this.target.removeEventListener('mouseup', this.relaseEvent);
		this.target.removeEventListener('resizeEvent', this.resizeEvent);
	},

	/*
	 * Define what have to be down (you got it ?).
	*/
	definePressEvent: function() {
		var self = this;

		return function PressEvent(event) {
			self.stat.press = true;
			self.stat.pressTime = Date.now();
		};
	},

	/*
	 * Define what have to be down when the will be relase
	*/
	defineReleaseEvent: function() {
		var self = this;

		return function relaseEvent(event) {
			self.stat.release = true;
		};
	},

	defineResizeEvent: function() {
		var self = this;
		var canvas = document.querySelector('#my_canvas');

		return function resizeEvent() {
			//canvas.height = ~~(window.innerHeight/2.5);
			//canvas.width = ~~(window.innerWidth/2.5);

		};
	}
};