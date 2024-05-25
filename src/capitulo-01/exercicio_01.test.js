import { isDuplicateCharacterWithArray as isDuplicateCharacter } from "./exercicio_01.js"

test("abc", () => {
  expect(isDuplicateCharacter("abc")).toBe(false)
})

test("abbc", () => {
  expect(isDuplicateCharacter("abbc")).toBe(true)
})

test("empty string", () => {
  expect(isDuplicateCharacter("")).toBe(false)
})

test("single character", () => {
  expect(isDuplicateCharacter("a")).toBe(false)
})

test("unique characters", () => {
  expect(isDuplicateCharacter("abcdef")).toBe(false)
})

test("all identical characters", () => {
  expect(isDuplicateCharacter("aaaaaa")).toBe(true)
})

test("mixed case characters", () => {
  expect(isDuplicateCharacter("aA")).toBe(false)
  expect(isDuplicateCharacter("aAa")).toBe(true)
})

test("special characters", () => {
  expect(isDuplicateCharacter("a!@#")).toBe(false)
  expect(isDuplicateCharacter("a!@a")).toBe(true)
})

test("numbers and letters", () => {
  expect(isDuplicateCharacter("a1b2c3")).toBe(false)
  expect(isDuplicateCharacter("a1b2c3a")).toBe(true)
})
