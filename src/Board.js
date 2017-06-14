function Board() {
  this.board_array = [];
  this.symbol = "*";
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
