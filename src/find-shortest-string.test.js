// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
  expect(findShortestString(["Lui", "ha", "got", "this"])).toBe("ha");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["happy", "be", "clown", "do"])).toBe("be");
  expect(findShortestString(["yeah", "he", "has", "be"])).toBe("he");
});
