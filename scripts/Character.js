/*
* Character object
*/
function Character(id, level){

	// The id of our character
	this.id = id;

	// The level of the tiles
	this.level = level;

	// Where to get the right texture in the tileset
	this.textureCoord = this.level.tilesets.character.getTextureCoord(id);

	// Size tile
	this.width = 62;
	this.height = 32;

	// The coord canvas of the character
	this.renderCoord = {
		x: 0,
		y: 0
	};

	// The character position in the level
	this.characterPosition = {
		x: 2,
		y: 0
	};
}

/*
* Function that moves the player
*/
Character.prototype.forwardCharacter = function(){

	console.log("caca")
	this.characterPosition.y++;
	this.doRenderCharacter();
};

/*
* Function that render the player
*/
Character.prototype.doRenderCharacter = function(){

	this.renderCoord.x = this.level.map[this.characterPosition.x][this.characterPosition.y].renderCoord.x;
	this.renderCoord.y = this.level.map[this.characterPosition.x][this.characterPosition.y].renderCoord.y;

	this.level.ctx.drawImage(this.level.tilesets.character.texture, this.textureCoord.x, this.textureCoord.y, this.width, this.height, this.renderCoord.x, this.renderCoord.y, this.width, this.height);
};