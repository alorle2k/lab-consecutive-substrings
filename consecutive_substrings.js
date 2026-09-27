function consecutiveSubstrings(string) {
  const substrings = []

  // Start at each character in the string.
  for (let start = 0; start < string.length; start++) {

    // Create every consecutive substring starting at this position.
    for (let end = start + 1; end <= string.length; end++) {
      substrings.push(string.slice(start, end))
    }
  }

  return substrings
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']")
  console.log("=>", consecutiveSubstrings('abc'))

  console.log("")

  console.log("Expecting: ['a']")
  console.log("=>", consecutiveSubstrings('a'))
}

module.exports = consecutiveSubstrings
