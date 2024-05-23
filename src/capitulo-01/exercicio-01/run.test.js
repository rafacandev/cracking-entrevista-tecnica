import { run } from "./run.js";

test("1 + 2 = 3", () => {
  expect(run(1, 2)).toBe(3);
});
