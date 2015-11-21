/*
* Game object
*/
function Game(config){

	// Our config
	this.config = config;

	// Our tileSets
	this.tilesets = {};

	// Our level
	this.level = {};

	//this.level.doRenderLevel();
}

Game.prototype.init = function(){

	// Request to get the config
	/*
	var xmlhttp = new XMLHttpRequest();
	var url = "config.json";

	xmlhttp.onload = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			this.config = JSON.parse(xmlhttp.responseText);

			this.tilesets.map = new TileSet(this.config.tilesets.map.texturesCoord, this.config.tilesets.map.tilesetPath);
			this.tilesets.character = new TileSet(this.config.tilesets.character.texturesCoord, this.config.tilesets.character.tilesetPath);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();*/

	this.tilesets.map = new TileSet(this.config.tilesets.map.texturesCoord, this.config.tilesets.map.tilesetPath);
	this.tilesets.character = new TileSet(this.config.tilesets.character.texturesCoord, this.config.tilesets.character.tilesetPath);

	// Our canvas listener
	//this.level.canvas.addEventListener("onclick", this.level.character.forwardCharacter(), false);
};

Game.prototype.loadLevel = function(){

	this.level = new Level(0, "Niveau 1", 5, 200, this.tilesets);

	this.level.doRenderLevel();
};