describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("has an array consisting of 10 rows & 10 columns", function() {
    expect(board.board_array.length).toBe(10);
    for(var x = 0; x < 10; x++) {
      expect(board.board_array[x].length).toBe(10);
    }
  });

});
