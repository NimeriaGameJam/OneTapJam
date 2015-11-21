/*
* Tile Object
*/
function Tile(id, level){

	// The id of our tile
	this.id = id;

	// The level of the tiles
	this.level = level;

	// Where to get the right texture in the tileset
	this.textureCoord = this.level.tileset.getTextureCoord(id);

	// Size tile
	this.width = 62;
	this.height = 32;

	// The coord canvas of the tile
	this.renderCoord = {
		x: 0,
		y: 0
	};
}

/*
* Function that renders tiles of the level
*/
Tile.prototype.doRenderTile = function(i , j){
	
	// The coordinates where drawing isometrics our boxes
	var x = (j * (this.width + 2) / 2) + (i * (this.width + 2) / 2);
	var y = (i * this.height / 2) - (j * this.height / 2);

	this.renderCoord.x = x;
	this.renderCoord.y = y;

	this.level.ctx.drawImage(this.level.tileset.texture, this.textureCoord.x, this.textureCoord.y, this.width, this.height, this.renderCoord.x, this.renderCoord.y, this.width, this.height);
};