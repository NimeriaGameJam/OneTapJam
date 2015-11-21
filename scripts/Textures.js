/*
* Textures object
*/
function Textures(texturesCoord){

	// The top-left corner coords of the tileSet textures
	this.texturesCoord = texturesCoord;

	// Our tileSet
	this.tileSet = document.createElement('img');
	this.tileSet.src = "assets/img/tiles.png";
}

/*
* Function that returns the right texture depending on the id of tile
*/
Textures.prototype.getTextureCoord = function(id){

	return this.texturesCoord[id];
};