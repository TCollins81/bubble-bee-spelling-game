describe("About Functions", function() {
//
  it("should declare functions", function() {

    function subtract(a, b) {
      return a - b;
    }

    expect(subtract(10, 5)).toBe(5);
  });
});
