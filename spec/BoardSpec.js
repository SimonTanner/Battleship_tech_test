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

  it("has a data structure for storing ships and their location in", function() {
    expect(Object.keys(board.ship_types).length).toEqual(5);
  });

  describe("convertLetter", function() {
    it("converts a letter into the corresponding number for the board array", function() {
      expect(board.convertLetter("A")).toEqual(0);
    });
  });

  describe("shipLocation", function() {
    it("stores the location given for a particular ship in the ship_types table", function() {
      board.shipLocation("A", 5, "Carrier");
      expect(board.ship_types.Carrier.location).toEqual([0,4]);
    });
  });

});
