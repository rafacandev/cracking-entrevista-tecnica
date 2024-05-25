/**
 * @param {string} txt - The input string to check for duplicate characters.
 * @returns {boolean} - Returns true if a duplicate character is found, otherwise false.
 */
export function isDuplicateCharacterWithSet(txt) {
  const chars = new Set()
  for (let char of txt) {
    if (chars.has(char)) {
      return true
    }
    chars.add(char)
  }
  return false
}

/**
 * @param {string} txt - The input string to check for duplicate characters.
 * @returns {boolean} - Returns true if a duplicate character is found, otherwise false.
 */
export function isDuplicateCharacterWithArray(txt) {
  const chars = new Array(128).fill(false)
  for (let i = 0; i < txt.length; i++) {
    const charCode = txt.charCodeAt(i)
    if (chars[charCode]) {
      return true
    } else {
      chars[charCode] = true
    }
  }
  return false
}
