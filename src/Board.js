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
}
