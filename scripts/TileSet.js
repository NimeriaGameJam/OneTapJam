/*
 * Contain the tiles used by the game.
*/
function Tileset(tileMap, path, callback) {
	this.texture = document.createElement('img');
	this.texture.src = path;
	this.texture.onload = callback;

	this.tileMap = this.buildTileMap(tileMap);
}

/*
 * Function that returns the right texture depending on the id of tile.
*/
Tileset.prototype = {
	/*
	 * Convert array to object to be more "dev friendly".
	*/
	buildTileMap: function(tileMap) {
		var result = {};

		for(var key in tileMap){
			var pos = tileMap[key];

			result[key] = {
				x: pos[0],
				y: pos[1],
				w: pos[2],
				h: pos[3],
				offX: pos[4],
				offY: pos[5]
			};
		}

		return result;
	},

	/*
	 * Get the `id` named tile or the `all 0` default tile.
	*/
	get: function(id) {
		return this.tileMap[id] || [0, 0, 0, 0, 0, 0];
	}
};