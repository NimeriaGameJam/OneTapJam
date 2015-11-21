/*
* Game object
*/
function Game(){

	this.texturesCoord = [
		{x: 0,	y: 62}, // 0 : Perso
		{x: 0,	y: 0}, 	// 1 : id Floor
		{x: 62,	y: 0},	// 2 : id Pike
		{x: 124,y: 0},	// 3 : id Smooth
		{x: 0,	y: 0}	// 4 : Wall	
	];

	this.textures = new Textures(this.texturesCoord);

	this.level = new Level(0, "Niveau 1", 5, 200, this.textures);

	var self = this;

	window.onload = function() {

		self.level.canvas.addEventListener("onclick", self.level.character.forwardCharacter(), false);
		self.level.doRenderLevel();
	};
}