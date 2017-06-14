function Board() {
  this.board_array = [];
  this.symbol = "*";
  this.symbol_2 = "X";
  this.sub_array = [];
  for(var i = 1; i <= 10; i++) {
    this.sub_array.push(this.symbol);
  }

  for(i = 1; i <= 10; i++) {
    this.board_array.push(this.sub_array);
  }
  this.ship_types = {"Carrier":{}, "Battleship":{}, "Cruiser":{}, "Submarine":{}, "Destroyer":{}};
}

Board.prototype.convertLetter = function(letter) {
  return letter.charCodeAt() - 65;
};

Board.prototype.shipLocation = function(letter, row_index, type) {
  column_index = this.convertLetter(letter);
  row_index -= 1;
  this.ship_types[type].location = [row_index, column_index];
  this.board_array[row_index][column_index] = this.symbol_2;
};
