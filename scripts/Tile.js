/*
 * the Tile is used to définie a static / animated bloc on the map,
 * they was used only for graphique purpose.
*/
function Tile(tileset, data) {
	this.tileset = tileset;
	this.tileAnimation = this.buildAnimation(data);
}

Tile.prototype = {
	/*
	 * Build the realAnimation from the data.
	*/
	buildAnimation: function(data) {
		var self = this,
			result = [],
			tile, i;

		data.forEach(function (frame) {
			tile = self.tileset.get(frame.id);

			for(i=0; i<frame.count; i++)
				result.push(tile);
		});

		return result;
	},

	/*
	 * Get the tile for the time frame.
	*/
	getTile: function(time) {
		return this.tileAnimation[ (~~(time / Game.TIME_STEP)) % this.tileAnimation.length ];
	},

	render: function(ctx, time, x, y) {
		var pos = this.transpose(x, y),
			tile = this.getTile(time);

		ctx.drawImage(this.tileset.texture, tile.x, tile.y, tile.w, tile.h, pos.x -tile.offX, pos.y -tile.offY, tile.w, tile.h);
	},

	/*
	 * Change the 2d position into 2d isometrique.
	*/
	transposeX: 32,
	transposeY: 16,
	transpose: function(x, y) {
		return {
			x: x*this.transposeX + y*this.transposeX,
			y: -x*this.transposeY + y*this.transposeY
		};
	}
};


Object.defineProperty(Tile.prototype, 'cycle', {
	get: function() {
		return this.tileAnimation.length;
	}
});



//delay between two animation frame.
