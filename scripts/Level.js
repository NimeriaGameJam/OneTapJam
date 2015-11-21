/*
* Level Object
*/
function Level(id, name, nb_rows, nb_col, tilesets){

	// Unique id
	this.id = id;

	// Name of our map
	this.name = name;

	// Our map limits
	this.nb_rows = nb_rows;
	this.nb_col = nb_col;

	// Our tileset
	this.tilesets = tilesets;

	// Our map
	this.map = this.initMap();

	// Our character
	this.character = new Character(0, this);

	// Our work area : The canvas
	this.canvas = document.getElementById("my_canvas");

	this.ctx = this.canvas.getContext("2d");
	this.ctx.translate(0, this.canvas.height / 2);
	this.ctx.scale(1, 1);
	this.ctx.imageSmoothingEnabled = false;
}

/*
* Function that initializes our level
*/
Level.prototype.initMap = function(){

	var tab = [];

	for (var i = 0; i < this.nb_rows; i++) {

		tab.push([]);

		for(var j = 0; j < this.nb_col; j++) {

			tab[i].push([]);

			// Our tile id
			var id = Math.floor(Math.random() * 4) + 1;

			// Our tile object
			tab[i][j] = new Tile(id, this);
		}
	}

	return tab;
};

/*
* Function that returns our tile object that contains the id and texture coords
*/
Level.prototype.getTile = function(mapX, mapY){

	return this.map[mapX][mapY];
};

/*
* Function that renders the level
*/
Level.prototype.doRenderLevel = function(){

	for (var i = 0; i < this.nb_rows; i++) {

		for(var j = this.nb_col - 1; j >= 0; j--) {

			// Our tile
			var tile = this.getTile(i, j);

			tile.doRenderTile(i, j);
		}
	}

	this.character.doRenderCharacter();
};