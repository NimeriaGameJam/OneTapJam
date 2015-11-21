/*
* Textures object
*/
function TileSet(texturesCoord, path){

	// The top-left corner coords of the tileSet textures
	this.texturesCoord = texturesCoord;

	// Our tileSet
	this.texture = document.createElement('img');
	this.texture.src = path;
}

/*
* Function that returns the right texture depending on the id of tile
*/
TileSet.prototype.getTextureCoord = function(id){

	return this.texturesCoord[id];
};